import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function HYRecommend(props) {
    const {getBanners} = props;
    useEffect(() => {
        getBanners();
    }, [getBanners])
    return (
        <div>
            <h1>HYRecommend: {props.topBanners.length}</h1>
        </div>
    )
}
const mapStateToProps = state => ({
    topBanners: state.recommend.topBanners
});
const mapDispatchToProps = (dispatch) => ({
    getBanners() {
        dispatch(getTopBannerAction())
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
