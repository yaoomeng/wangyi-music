import React, { memo } from 'react'
import {
    HotAnchorWrapper
} from './style';
import {
    hotRadios
} from '@/common/local_data';
import {
    getSizeImage
} from '@/utils/format-utils';
import { useEffect } from 'react';
export default memo(function HYHotAnchor() {
    return (
        <HotAnchorWrapper>
            <div className="anchor-title">
                <h3>热门主播</h3>
            </div>
            <ul className="anchor-list">
                {
                    hotRadios.map((item, index) => {
                        return (
                            <li className="anchor" key={item.name}>
                                <a href="/todo">
                                    <img src={getSizeImage(item.picUrl, 40)} alt="" />
                                </a>
                                <div className="info">
                                    <div className="info-top">
                                        <a href="/todo">{item.name}</a>
                                    </div>
                                    <div className="info-bottom text-nowrap">{item.position}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </HotAnchorWrapper>
    )
})
