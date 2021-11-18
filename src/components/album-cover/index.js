import React, { memo } from 'react';
import { AlbumWrapper } from './style';
import { getSizeImage } from '@/utils/format-utils';
export default memo(function HYAlbumCover(props) {
    // 解构父组件传过来的图片大小以及图片信息
    const { info, size = 130, width = 153, bgp = "-845px" } = props;
    return (
        <AlbumWrapper size={size} width={width} bgp={bgp}>
            <div className="album-image">
                <img src={getSizeImage(info.picUrl, size)} alt="" />
                <a className="cover image_cover" href="todo"> </a>
            </div>
            <div className="album-info">
                <div className="name text-nowrap">{info.name}</div>
                <div className="artist text-nowrap">{info.artist.name}</div>
            </div>
        </AlbumWrapper>
    )
})
