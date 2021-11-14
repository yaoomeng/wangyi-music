import React, { memo } from 'react';

import {
    RecommendWrapper 
} from './style'
import HYTopBanner from './c-cpns/top-banner/index';
function HYRecommend(props) {
    return (
        <RecommendWrapper>
            <HYTopBanner></HYTopBanner>
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
