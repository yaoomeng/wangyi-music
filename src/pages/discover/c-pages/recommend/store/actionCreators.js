import * as actionTypes from './constants';
import { getTopBanners } from '@/services/recommend';

const changeTopBannersAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners

})
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {   
            // console.log(res);
            dispatch(changeTopBannersAction(res));
        })
    }
    
}