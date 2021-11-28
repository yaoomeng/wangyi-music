import request from './request';
// 轮播图
export function getTopBanners() {
    return request({
        url: '/banner'
    })
}
// 热门推荐
export function getHotRecommends(limit) {
    return request({
        url: '/personalized',
        params: {
            limit
        }
    })
}

// 新碟上架
export function getNewAlbums(limit) {
    return request({
        url: '/top/album',
        params: {
            limit
        }
    })
}

// 榜单
// idx=0 新歌榜  idx=2 原创榜 idx=3 飙升榜
export function getTopList(idx)  {
    return request({
        url: '/top/list',
        params: {
            idx
        }
    })
}

// 获取全部入驻歌手
export function getArtistList(limit, cat) {
    return request({
      url: "/artist/list",
      params: {
        cat,
        limit
      }
    })
  }