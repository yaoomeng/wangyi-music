import React, { memo } from 'react';

import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight 
} from './style'
import HYTopBanner from './c-cpns/top-banner/index';
import HYHotRecommend from './c-cpns/hot-recommend/index';
import HYNewAlbum from './c-cpns/new-album';
import HYRecommendRanking from './c-cpns/recommend-ranking';
import HYUserLogin from './c-cpns/user-login';
import HYSettleSinger from './c-cpns/settle-singer';
import HYHotAnchor from './c-cpns/hot-anchor';
function HYRecommend(props) {
    return (
        <RecommendWrapper>
            <HYTopBanner></HYTopBanner>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <HYHotRecommend></HYHotRecommend>
                    <HYNewAlbum></HYNewAlbum>
                    <HYRecommendRanking></HYRecommendRanking>
                </RecommendLeft>
                <RecommendRight>
                    <HYUserLogin></HYUserLogin>
                    <HYSettleSinger></HYSettleSinger>
                    <HYHotAnchor></HYHotAnchor>
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

export default memo(HYRecommend);





// 不用hooks的写法
// function HYRecommend(props) {
//     const {getBanners} = props;
//     useEffect(() => {
//         getBanners();
//     }, [getBanners])
//     return (
//         <div>
//             <h1>HYRecommend: {props.topBanners.length}</h1>
//         </div>
//     )
// }
// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// });
// const mapDispatchToProps = (dispatch) => ({
//     getBanners() {
//         dispatch(getTopBannerAction())
//     }
// });
// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
