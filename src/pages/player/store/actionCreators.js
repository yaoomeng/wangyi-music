import {
    getSongDetail,
    getLyric
} from '@/services/player.js';
import * as actionTypes from './constants';
import {
    getRandom
} from '@/utils/math-utils';
import {
    parseLyric
} from '@/utils/parse-lyric';
const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
});
const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
});
const changeCurrentSongIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
});

const changeLyricAction = (lyric) => ({
    type: actionTypes.CHANGE_LYRICS,
    lyric
})

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
});

export const changeCurrentLyricIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    index
})


// 点击上一首 下一首的实现逻辑
export const changeCurrentSong = (tag) => {
    return (dispatch, getState)  => {
        // 由于播放模式的不同，上一首和下一首获取的歌曲不同，因此首先判断是哪一种播放模式：2循环播放、1随机播放、0顺序播放
        const sequence = getState().getIn(["player", "sequence"]);
        let currentSongIndex = getState().getIn(["player","currentSongIndex"]);
        
        const playList = getState().getIn(["player", "playList"]);

        switch(sequence) {
            case 1:
                let randomIndex = getRandom(playList.length);
                while(randomIndex === currentSongIndex) {
                    randomIndex = getRandom(playList.length);
                }
                currentSongIndex = randomIndex;
                break;
            default:   // 无论是循环还是顺序，最终都会播放上一首下一首，只有当歌曲自动播放完成并且处于循环播放才会播放同一首歌
                currentSongIndex += tag;
                if(currentSongIndex >= playList.length) {
                    currentSongIndex = 0;
                }
                if(currentSongIndex < 0) {
                    currentSongIndex = playList.length-1;
                }
                break;

        }
        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
        dispatch(getLyricAction(currentSong.id));
    }
}


export const getSongDetailAction = (ids) => {
    // return dispatch => {
    //     
    //     getSongDetail(ids).then(res => {
    //         dispatch(changeCurrentSongAction(res.songs[0]))
    //     })
    // }
    // 需要获取redux中的state， 因此传入第二个参数getState
    return (dispatch, getState) => {
        // 1. 根据ids查找播放列表playList中是否存在该歌曲
        const playList = getState().getIn(["player", "playList"]);
        // 如果未找到则songIndex为-1
        const songIndex = playList.findIndex((song) => song.id === ids);
        let song = null;
        // 2. 判断是否找到歌曲
        if(songIndex !== -1) {
            // 找到歌曲, 从播放列表中获取此数据
            dispatch(changeCurrentSongIndexAction(songIndex));
            song = playList[songIndex];
            dispatch(changeCurrentSongAction(song));
            if(!song) return;
            dispatch(getLyricAction(song.id));
        } else {
            // 未找到歌曲，请求该歌曲的信息
            // getSongDetail是异步请求
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0];
                if(!song) return;
                // 将请求到的歌曲加入到播放列表中
                const newPlayList = [...playList];
                newPlayList.push(song);
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length-1))

                dispatch(changeCurrentSongAction(song));

                dispatch(getLyricAction(song.id));
            })       
        }
        // 3. 请求该歌曲的歌词
        // 由于getSongDetail是异步请求，因此下面的代码在还未请求到数据的时候已经执行,需将代码放入getSongDetail回调函数中
        // if(!song) return;
        // dispatch(getLyricAction(song.id));
        
    }
}


// 获取歌词数据
export const getLyricAction = (id) => {
    return dispatch => {
        // 请求歌曲的歌词信息
        getLyric(id).then(res => {
            // 获取到的歌词
            const lyric = res.lrc.lyric;
            // 解析歌词
            const lyricList = parseLyric(lyric);

            dispatch(changeLyricAction(lyricList));
            
        })
    }
}