import React, { memo } from 'react';
import {
    SongsCoverWrapper
} from './style';
import {
    getCount,
    getSizeImage
} from '@/utils/format-utils'
export default memo(function HYSongsCover(props) {
    const { info } = props;
    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl, 140)} alt="" />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom">
                <a href="todo">{info.name}</a>
            </div>
            {/* 显示作者姓名，比如歌单页面 */}
            <div className="cover-source"></div>
        </SongsCoverWrapper>
    )
})
