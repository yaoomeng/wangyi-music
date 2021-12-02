import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import { changeSequenceAction, getSongDetailAction } from '../store/actionCreators';
import { 
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator,
    LockWrapper 
} from './style';
import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils';
import { shallowEqual, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export default memo(function HYAppPlayerBar() {
    const dispatch = useDispatch();
    const {currentSong, sequence} = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        sequence: state.getIn(["player", "sequence"])
    }), shallowEqual);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    // 歌曲播放以及滑动滑块都会改变progress,此时会产生冲突，设置控制变量
    const [isChanging, setIsChanging] = useState(false);
    // 控制播放或者暂停
    const [isPlaying, setIsPlaying] = useState(false);
    // 控制播放组件是否显示
    const [isShowPlay, setIsShowPlay] = useState(false);
    
    // 控制播放组件是否锁定
    const [isLock, setIsLock] = useState(false);
    useEffect(() => {
        dispatch(getSongDetailAction(1888915574));
    }, [dispatch]);
    useEffect(() => {
        playRef.current.src = getPlaySong(currentSong.id);
    }, [currentSong]);

    const playRef = useRef(null);
    const showPlayRef = useRef();
    const lockPositionRef = useRef();
    // 对数据进行处理，在最开始时数据为空，获取空对象的属性会报undefined错误
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const artistName = (currentSong.ar && currentSong.ar[0].name) || "";
    const duration = currentSong.dt || 0;
    const showDuration = formatMinuteSecond(duration);
    // progress代表播放进度百分比，由于滑动滑块需要引起界面重绘，因此需存放在state中
    // const progress = currentTime / duration * 100;
    // 处理函数
    const play = () => {
        isPlaying ? playRef.current.pause() : playRef.current.play();
        setIsPlaying(!isPlaying);
        
    };
    const timeUpdate = (e) => {
        
        if(!isChanging){
            setCurrentTime(e.target.currentTime * 1000);
            setProgress(currentTime / duration * 100);
        }
        
    };
    const slideChange = useCallback((value) => {
        setIsChanging(true);
        const current = value / 100 * duration / 1000;
        setCurrentTime(current * 1000);
        setProgress(value);
    }, [duration]);
    const slideAfterChange = useCallback((value) => {
        const current = value / 100 * duration / 1000;
        playRef.current.currentTime = current;
        setCurrentTime(current * 1000);
        setIsChanging(false);
    }, [duration]);
    const lock = () => {
        setIsLock(!isLock);
    }
    const showPlay = () => {
        
        showPlayRef.current.style.display = "block";
        lockPositionRef.current.style.bottom = "45px";
        if(!isShowPlay) {
            setIsShowPlay(true);
        }       
    }

    const coverPlay = () => {
        
        showPlayRef.current.style.display = "none";
        lockPositionRef.current.style.bottom = "0";      
        setIsShowPlay(false);
    }

    const changeSequence = () => {
        let currentSequence = (sequence+1)%3;
        dispatch(changeSequenceAction(currentSequence))
    }
    return (
        <div>
            <LockWrapper 
                isLock={isLock} 
                onMouseOver={e => showPlay()}
                onMouseOut={e => coverPlay()}
                ref={lockPositionRef}
            >
                <div className="lock playbar" >
                    <div 
                        className="lock-icon playbar" 
                        href="/todo"
                        onClick={e => lock()}
                    ></div>
                </div>
            </LockWrapper>
            <PlaybarWrapper 
                className="playbar" 
                ref={showPlayRef}
                onMouseMove={e => {showPlay()}}
            >
                <div className="content wrap-v2">
                    <Control isPlaying={isPlaying}>
                        <button className="prev playbar"></button>
                        <button className="play playbar" onClick={e => play()}></button>
                        <button className="next playbar"></button>
                    </Control>
                    <PlayInfo>
                        <div className="image">
                            <NavLink to='/discover/player' className="playbar">
                                <img src={getSizeImage(picUrl, 35)} alt="播放图片" />
                                <div className="cover playbar"> </div>
                            </NavLink>
                            
                        </div>
                        <div className="info">
                            <div className="song">
                                <a href="/todo" className="song-name">{currentSong.name}</a>
                                <a href="/todo" className="artist-name">{artistName}</a>
                            </div>
                            <div className="progress">
                                <Slider 
                                    className="slide statbar" 
                                    value={progress} 
                                    defaultValue={30} 
                                    disabled={false} 
                                    tooltipVisible={false}
                                    onChange={slideChange}
                                    onAfterChange={slideAfterChange}
                                />
                                <div className="time">
                                    <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                                    <span className="divider"> / </span>
                                    <span className="duration">{showDuration}</span>
                                </div>
                            </div>

                        </div>
                    </PlayInfo>
                    <Operator sequence={sequence}>
                        <div className="left">
                            <button className="playbar btn favor"></button>
                            <button className="playbar btn share"></button>
                        </div>
                        <div className="right playbar">
                            <button className="playbar btn volume"></button>
                            <button 
                                className="playbar btn loop" 
                                onClick={e => changeSequence()}
                            ></button>
                            <button className="playbar btn playlist"></button>
                        </div>
                    </Operator>
                    <audio 
                        ref={playRef} 
                        onTimeUpdate={e => timeUpdate(e)}
                        
                    />
                </div>
            </PlaybarWrapper>
            
        </div>
    )
})
