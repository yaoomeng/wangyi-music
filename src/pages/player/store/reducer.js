import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
    // 当前正在播放的歌曲对象的详细信息
    currentSong: {},
    // 播放列表
    playList: [
        {
            "name": "有何不可",
            "id": 167876,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 5771,
                    "name": "许嵩",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "600902000007916021",
            "fee": 8,
            "v": 51,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 16953,
                "name": "自定义",
                "picUrl": "https://p1.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg",
                "tns": [],
                "pic_str": "109951166118671647",
                "pic": 109951166118671650
            },
            "dt": 241840,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9675799,
                "vd": -21099
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5805497,
                "vd": -18400
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3870346,
                "vd": -16900
            },
            "a": null,
            "cd": "1",
            "no": 3,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 2,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 51,
            "songJumpInfo": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mst": 9,
            "cp": 22036,
            "rtype": 0,
            "rurl": null,
            "mv": 0,
            "publishTime": 1231516800000
        },
        {
            "name": "路过人间",
            "id": 1888915574,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 10200,
                    "name": "郁可唯",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 4,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 135115949,
                "name": "时光音乐会 第1期",
                "picUrl": "https://p2.music.126.net/b_lFQUHgdaOvuBgf8wMO0w==/109951166557050112.jpg",
                "tns": [],
                "pic_str": "109951166557050112",
                "pic": 109951166557050110
            },
            "dt": 288546,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 11544076,
                "vd": -45493
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 6926463,
                "vd": -42914
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4617657,
                "vd": -41403
            },
            "a": null,
            "cd": "01",
            "no": 5,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 4,
            "songJumpInfo": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rurl": null,
            "rtype": 0,
            "mst": 9,
            "cp": 0,
            "publishTime": 0
        },
        {
            "name": "删了吧",
            "id": 1891469546,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 49937403,
                    "name": "烟(许佳豪)",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [
                "要不你还是把我删了吧"
            ],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 5,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 135521932,
                "name": "删了吧",
                "picUrl": "https://p2.music.126.net/nNg4YjkcK1AwCX1FrN8VOQ==/109951166578333625.jpg",
                "tns": [],
                "pic_str": "109951166578333625",
                "pic": 109951166578333630
            },
            "dt": 204955,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 8200403,
                "vd": -26816
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 4920259,
                "vd": -24206
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3280187,
                "vd": -22486
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 5,
            "songJumpInfo": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "mv": 0,
            "publishTime": 1636128000000
        },
        {
            "name": "孤独的艺术家",
            "id": 1899114556,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 1199064,
                    "name": "FOX胡天渝",
                    "tns": [],
                    "alias": []
                },
                {
                    "id": 28638705,
                    "name": "阿斯巴田ASPT",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 3,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 136746006,
                "name": "孤独的艺术家",
                "picUrl": "https://p1.music.126.net/qaTRrm7qVwClAOH5FyExwg==/109951166671245250.jpg",
                "tns": [
                    "Growth"
                ],
                "pic_str": "109951166671245250",
                "pic": 109951166671245250
            },
            "dt": 173802,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 6954285,
                "vd": -57849
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 4172589,
                "vd": -55341
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 2781741,
                "vd": -53805
            },
            "a": null,
            "cd": "01",
            "no": 0,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 3,
            "songJumpInfo": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "mv": 0,
            "publishTime": 1638288000000,
            "tns": [
                "Growth"
            ]
        },
        {
            "name": "哭泣站台",
            "id": 1892583113,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 29069586,
                    "name": "王小帅",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 3,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 135731737,
                "name": "哭泣站台",
                "picUrl": "https://p2.music.126.net/c4JKciFMz4kbPMVqUWxsOw==/109951166589959337.jpg",
                "tns": [],
                "pic_str": "109951166589959337",
                "pic": 109951166589959340
            },
            "dt": 224448,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 8978925,
                "vd": -54616
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5387373,
                "vd": -52000
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3591597,
                "vd": -50301
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 3,
            "songJumpInfo": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 7001,
            "mv": 0,
            "publishTime": 0
        }
    ],
    // 记录当前歌曲在播放列表中的索引值, 用来设置上一首，下一首
    currentSongIndex: 0,
    // 定义当前播放的规则   0 -> 顺序播放  1 -> 随机播放   2 -> 循环播放
    sequence: 0,
    lyric: [],

    // 当前歌词处于歌词列表中的索引值
    currentLyricIndex: 0,
    // 是否显示歌词列表
    showPlayList: false

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
            return state.set("sequence", action.sequence);
        case actionTypes.CHANGE_LYRICS:
            return state.set("lyric", action.lyric);
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.index);
        case actionTypes.CHANGE_SHOW_PLAYLIST:
            return state.set("showPlayList", action.showPlayList);
        default:
            return state;
    }
}
export default reducer;