import { Map } from 'immutable';
import {
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMEND,
    CHANGE_NEW_ALBUM
} from './constants'

//考虑到性能，我们用immutable中的Map对数据进行包裹，
// const defaultState = {
//     topBanners: []
// }
const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: []
})
function reducer(state=defaultState, action) {
    switch(action.type) {
        case CHANGE_TOP_BANNERS: 
            // return {...state, topBanners: action.topBanners}
            // 由于将数据使用Map包裹，因此返回值需要修改
            return state.set("topBanners", action.topBanners);
        case CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.hotRecommends);
        case CHANGE_NEW_ALBUM:
            return state.set("newAlbums", action.newAlbums); 
        default: 
            return state;
    }
}
export default reducer;