import React, { memo, useCallback, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames'; 
import {
    PlayListWrapper
} from './style';
import {
    formatMinuteSecond
} from '@/utils/format-utils.js';
import {
    changeShowPlayList
} from '../../store/actionCreators';
export default memo(function HYOpenPlayList(props) {
    const {
        playList, 
        lyric, 
        currentSong,
        currentLyricIndex,
        showPlayList
    } = useSelector(state => ({
        playList: state.getIn(["player", "playList"]),
        lyric: state.getIn(["player", "lyric"]),
        currentSong: state.getIn(["player", "currentSong"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        showPlayList: state.getIn(["player", "showPlayList"])
    }), shallowEqual);
    const lyricRef = useRef(null);

     // 实现歌词滚动的功能 element=>滚动的元素  to=>滚动的目标位置   duration=>滚动的时间
    const scrollTo = useCallback(function(element, to, duration) {
        if(duration<0) return;
        var difference = to - element.scrollTop;
        const perTik = difference/duration*10;

        setTimeout(()=>{
            element.scrollTop = element.scrollTop + perTik;
            if(element.scrollTop === to) return;
            scrollTo(element, to, duration-10);
        }, 10);
    }, []);
 
    const dispatch = useDispatch();

    useEffect(() => {
        if(currentLyricIndex>=0 && currentLyricIndex<3) return;
        // 实现歌词滚动的功能
        scrollTo(lyricRef.current, (currentLyricIndex-3)*32, 300);
    }, [currentLyricIndex, scrollTo]);
    const closePlayList = () => {
        dispatch(changeShowPlayList(false));
    }
    return (
        <PlayListWrapper isShowList={showPlayList}>
            <div className="list-head playlist_bg">
                <h4>
                    播放列表(
                    <span className="list-number">{playList.length}</span>
                    )
                </h4>
                <a href="/todo" className="collect">
                      <span className="playlist2_bg"></span>  
                      收藏全部
                </a>
                <a href="/todo" className="clear">
                    <span className="playlist2_bg"></span>
                    清除
                </a>
                <p className="song-name">{currentSong.name}</p>
                <span 
                    className="close playlist2_bg"
                    onClick={e => {closePlayList()}}
                ></span>
            </div>
            <div className="content playlist_bg">
                <div className="left">
                    {
                        playList.map((item, index) => {
                            return (
                                <div className="song-item" key={item.id}>
                                    <div className="play-icon">
                                        <div className="icon"></div>
                                    </div>
                                    <div className="song-item-name">{item.name}</div>
                                    <div className="operate-icon">
                                        <div className="icon-add icon playlist2_bg"></div>                                      
                                        <div className="icon-share icon playlist2_bg"></div>
                                        <div className="icon-dwd icon playlist2_bg"></div>
                                        <div className="icon-del icon playlist2_bg"></div>
                                    </div>
                                    <div className="songer-name">{item.ar[0].name}</div>
                                    <div className="song-time">{formatMinuteSecond(item.dt)}</div>
                                    <div className="song-source">
                                        <a href="/todo" className="source-icon playlist2_bg"> </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="middle"></div>
                <div className="right" ref={lyricRef}>
                    <div className="lyric-wrapper">                    
                        {
                            lyric.map((item, index) => {
                                return (
                                    <p 
                                        key={item.time} 
                                        className={classNames('lyric-item', { 'checked-lyric': index===currentLyricIndex})}
                                    >
                                            {item.content}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        </PlayListWrapper>
    )
})
