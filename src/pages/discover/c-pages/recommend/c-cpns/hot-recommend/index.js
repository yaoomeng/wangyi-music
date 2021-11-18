import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
    HotRecommendWrapper
} from './style';
import { getHotRecommendAction } from '../../store/actionCreators';
import HYThemeHeaderRCM from '@/components/theme-header-rcm/index';
import HYSongsCover from '@/components/songs-cover/index';
import { HOT_RECOMMEND_LIMIT } from '@/common/constance';
export default memo(function HYHotRecommend() {
    // redux hooks
    const dispatch = useDispatch();
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.get("recommend").get("hotRecommends")
    }), shallowEqual);
    // 其他hooks
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    }, [dispatch]);
    return (
        <div>
            <HotRecommendWrapper>
                <HYThemeHeaderRCM className="theme-header" title="热门推荐" keywords={["华语","流行","摇滚","民谣","电子"]}></HYThemeHeaderRCM>
                <div className="recommend-list">
                    {
                        hotRecommends.map((item, index) => {
                            return (
                                <HYSongsCover key={item.id} info={item} />                       
                            )
                        })
                    }
                </div>
            </HotRecommendWrapper>
        </div>
    )
})
