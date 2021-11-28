import * as actionTypes from './constants';

// getTopBanners发送网络请求，获取轮播图数据
import { 
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getTopList,
    getArtistList 
} from '@/services/recommend';

// 返回对象
const changeTopBannersAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})

const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist

})

const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist

})

const changeOriginRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist

})

const changeSettleSingersAction = (res) => ({
    type: actionTypes.CHANGE_SETTLE_SINGER,
    settleSingers: res.artists
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

export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res))
        })
    }
}

export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            dispatch(changeNewAlbumAction(res))
        })
    }
}

export const getTopListAction = (idx) => {
    return dispatch => {
        getTopList(idx).then(res => {
            switch(idx) {
                case 0:
                    dispatch(changeNewRankingAction(res));
                    break;
                case 2:
                    dispatch(changeOriginRankingAction(res));
                    break;
                case 3:
                    dispatch(changeUpRankingAction(res));
                    break;
                default:

            }
        })
    }
}

export const getSettleSingersAction = (limit, cat) => {
    return dispatch => {
        getArtistList(limit, cat).then(res => {
            dispatch(changeSettleSingersAction(res));
        })
    }
}