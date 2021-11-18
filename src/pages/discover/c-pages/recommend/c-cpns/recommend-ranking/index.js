import React, { memo, useEffect } from 'react';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopListAction } from '../../store/actionCreators';
export default memo(function HYRecommendRanking() {
    const dispatch = useDispatch();
    const { upRanking, newRanking, originRanking } = useSelector(state => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"]),
    }), shallowEqual);
    useEffect(() => {
        dispatch(getTopListAction(0));
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));
    }, [dispatch])
    return (
        <div>           
            <RankingWrapper>
                <HYThemeHeaderRCM title="榜单"/>
                <div className="tops">
                    <HYTopRanking info={upRanking}/>
                    <HYTopRanking info={newRanking}/>
                    <HYTopRanking info={originRanking}/>
                </div>
            </RankingWrapper>
        </div>
    )
})
