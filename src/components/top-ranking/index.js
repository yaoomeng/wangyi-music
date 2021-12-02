import React, { memo } from 'react';
import { TopRankingWrapper } from './style';
import { getSizeImage } from '@/utils/format-utils';
import { getSongDetailAction } from '@/pages/player/store/actionCreators';
import { useDispatch } from 'react-redux';
export default memo(function HYTopRanking(props) {
    
    const { info } = props;
    const {tracks=[]} = info;

    const dispatch = useDispatch();

    const playMusic = (item) => {
        dispatch(getSongDetailAction(item.id));
    }

    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="header-img">
                    <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
                    <a href="todo" className="sprite_covor">ranking</a>
                </div>
                <div className="info">
                    <a href="todo"><h3>{info.name}</h3></a>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div key={item.id} className="list-item">
                                <div className="rank">{index + 1}</div>
                                <div className="info">
                                    <a className="name text-nowrap" href="/todo">{item.name}</a>
                                    <div className="operate">
                                        <button 
                                            className="btn sprite_02 play"
                                            onClick={e => playMusic(item)}
                                        ></button>
                                        <button className="btn sprite_icon2 addto"></button>
                                        <button className="btn sprite_02 favor"></button>
                                    </div>
                                </div>
                               
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <a href="/todo">查看全部 &gt;</a>
            </div>
        </TopRankingWrapper>
    )
})
