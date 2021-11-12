import * as actionTypes from './constants';

// getTopBanners发送网络请求，获取轮播图数据
import { getTopBanners } from '@/services/recommend';

// 返回对象
const changeTopBannersAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners

})

// 返回函数
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {   
            // console.log(res);
            dispatch(changeTopBannersAction(res));
        })
    }
    
}