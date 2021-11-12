import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators'

function HYRecommend(props) {
    const dispatch = useDispatch();

    // 将回调函数返回的对象赋值到recommend中
    // const recommend = useSelector( (state)=>({
    //     topBanners: state.recommend.topBanners
    // }) )
    // 因此可以对象解构
    const {topBanners} = useSelector( (state)=>({
        // topBanners: state.recommend.topBanners
         // 由于数据使用Immutable中的Map包裹，因此取数据时应修改
        // topBanners: state.recommend.get("topBanners")
        // 对合并后的数据也采用Map优化，此时state也成为immutable数据
        topBanners: state.get("recommend").get("topBanners")
        // 也可以使用此语法糖： topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual);
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])
    return (
        <div>
            <h1>HYRecommend: {topBanners.length}</h1>
        </div>
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
