import React, { memo, useEffect, useRef } from 'react';
import { Carousel } from 'antd';
import HYThemeHeaderRCM from '@/components/theme-header-rcm'; 
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getNewAlbumAction } from './../../store/actionCreators';
import HYAlbumCover from '@/components/album-cover';
import { AlbumWrapper } from './style';
export default memo(function HYNewAlbum() {
    const dispatch = useDispatch();
    const { newAlbums } = useSelector((state) => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual);
    const pageRef = useRef(null);
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
    }, [dispatch]);
    return (
        <AlbumWrapper>
            <HYThemeHeaderRCM title="新碟上架"/>
            <div className="content">
                <div className="inner">          
                    <div className="album">
                        <Carousel dots={false} ref={pageRef}>
                            {
                                [0, 1].map((item, index) => {
                                    return (
                                        <div key={item} className="page">
                                            {
                                                // 第一页展示0~4  第二页展示5~9 使用slice函数对数据进行截取
                                                newAlbums.slice(item*5,(item+1)*5).map((iten, indey) => {
                                                    return (
                                                        <HYAlbumCover 
                                                            key={iten.id} 
                                                            info={iten} 
                                                            size={100} 
                                                            width={118}
                                                            bgp="-570px"
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <span className="arrow arrow-left sprite_02 " onClick={e => pageRef.current.prev()}></span>
                    <span className="arrow arrow-right sprite_02 " onClick={e => pageRef.current.next()}></span>       
                </div>
            </div>
        </AlbumWrapper>
    )
})
