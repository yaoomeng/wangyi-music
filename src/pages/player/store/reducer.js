import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
    // 当前正在播放的歌曲
    currentSong: {},
    // 播放列表
    playList: [],
    // 记录索引值, 用来设置上一首，下一首
    currentSongIndex: 0,
    // 定义当前播放的规则   0 -> 循环播放  1 -> 随机播放   2 -> 单曲循环
    sequence: 0

})
function reducer(state=defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.index);
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence", action.sequence)
        default:
            return state;
    }
}
export default reducer;