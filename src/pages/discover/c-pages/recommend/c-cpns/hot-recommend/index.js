import React, { memo } from 'react';
import {
    HotRecommendWrapper
} from './style';
import HYThemeHeaderRCM from '@/components/theme-header-rcm/index'
export default memo(function HYHotRecommend() {
    return (
        <div>
            <HotRecommendWrapper>
                <h2>HYHotRecommend</h2>
                <HYThemeHeaderRCM title="热门推荐" keywords={["华语","流行","摇滚","民谣","电子"]}></HYThemeHeaderRCM>

            </HotRecommendWrapper>
        </div>
    )
})
