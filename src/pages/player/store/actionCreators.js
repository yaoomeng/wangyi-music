import {
    getSongDetail
} from '@/services/player.js';
import * as actionTypes from './constants';
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

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const getSongDetailAction = (ids) => {
    // return dispatch => {
    //     
    //     getSongDetail(ids).then(res => {
    //         dispatch(changeCurrentSongAction(res.songs[0]))
    //     })
    // }
    // 需要获取redux中的state， 因此传入第二个参数getState
    return (dispatch, getState) => {
        // 1. 根据ids查找播放列表playList中是否存在改歌曲
        const playList = getState().getIn(["player", "playList"]);
        // 如果未找到则songIndex为-1
        const songIndex = playList.findIndex((song) => song.id === ids);
        // 2. 判断是否找到歌曲
        if(songIndex !== -1) {
            // 找到歌曲, 从播放列表中获取此数据
            dispatch(changeCurrentSongIndexAction(songIndex));
            const song = playList[songIndex];
            dispatch(changeCurrentSongAction(song));
        } else {
            // 未找到歌曲，请求该歌曲的信息
            getSongDetail(ids).then(res => {
                const song = res.songs && res.songs[0];
                if(!song) return;
                // 将请求到的歌曲加入到播放列表中
                const newPlayList = [...playList];
                newPlayList.push(song);
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length-1))

                dispatch(changeCurrentSongAction(song));
            })
            
        }
        
    }
}