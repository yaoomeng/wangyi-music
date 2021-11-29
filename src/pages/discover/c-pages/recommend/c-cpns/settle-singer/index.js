import React, { memo, useEffect } from 'react'
import {
    Wrapper
} from './style';
import { getSizeImage } from '@/utils/format-utils';
import { getSettleSingersAction } from '../../store/actionCreators';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

export default memo(function HYSettleSinger() {
    const dispatch = useDispatch();
    const { settleSingers } = useSelector(state => ({
        settleSingers: state.get("recommend").get("settleSingers")
    }), shallowEqual);
    useEffect(() => {
        dispatch(getSettleSingersAction(5, 5001));
    }, [dispatch]);
    return (
        <Wrapper>

            <div className="title">
                <div className="left">入驻歌手</div>
                <div className="right">
                    <a href="/todo"> 查看全部 &gt; </a>
                </div>
            </div>
            <ul className="singer-list">
                {
                    settleSingers.map((item, index) => {
                        return (
                            <li key={item.name}>
                                <a href="/todo" className="singer">
                                    <div className="picture">
                                        <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                                    </div>
                                    <div className="info">
                                        <div className="info-top"><h4>{item.alias.join("") || item.name}</h4></div>
                                        <div className="info-bottom">{item.name}</div>
                                    </div>                                   
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <a href="/todo" className="apply-btn">
                <div>申请成为网易音乐人</div>
            </a>
        </Wrapper>
    )
})
