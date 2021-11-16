import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { 
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';
import { Carousel } from 'antd';
import { getTopBannerAction } from '../../store/actionCreators';
export default memo(function HYTopBanner() {

    const dispatch = useDispatch();

    // 将回调函数返回的对象赋值到recommend中
    // const recommend = useSelector( (state)=>({
    //     topBanners: state.recommend.topBanners
    // }) )
    // 因此可以对象解构
    const {topBanners} = useSelector( (state)=>({
        // topBanners: state.recommend.topBanners
         // 由于数据使用Immutable中的Map包裹，因此取数据时应修改
        // topBanners: state.recommend.get("topBanners")
        // 对合并后的数据也采用Map优化，此时state也成为immutable数据
        topBanners: state.get("recommend").get("topBanners")
        // 也可以使用此语法糖： topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual);
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch]);
    const bannerRef = useRef(null);
    // 在走马灯组件中，beforeChange切换面板前的回调，因此传入一个回调函数，回调函数可以使用useCallback包裹提高性能
    const [currentIndex, setCurrentIndex] = useState(0);
    const beforeChange = useCallback((from, to) => {
        // setCurrentIndex(to);
        setTimeout(() => {
            setCurrentIndex(to);
        }, 0);
    },[])
    // 其他业务逻辑
    // 取轮播图的背景图片，其中currentIndex存放的是当前播放图片的索引值
    // 不能直接用以下代码来取图片地址，因为一开始的时候topBanner是空，那么从空数组中取数会有问题
    // const bgImage = topBanners[currentIndex].imageUrl
    // 当前播放的图片地址后拼接"?imageView&blur=40x20"，服务器会将此图片处理成模糊图片作为整个轮播图的背景
    // const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");
    const bgImage = topBanners[currentIndex] ? (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20") : "";
    return (
        <div>
            <BannerWrapper bgImage={bgImage}>
                <div className="banner wrap-v2">
                    <BannerLeft>
                        <Carousel effect="fade" ref={bannerRef} beforeChange={beforeChange}>
                            {
                                topBanners.map((item, index) => {
                                    return (
                                        <div className="banner-item" key={item.imageUrl}>
                                            <img className="image" src={item.imageUrl} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </BannerLeft>
                    <BannerRight>
                        <a className="right-btn" target="_blank" rel="noreferrer" href="https://music.163.com/#/download"> </a>
                        <div className="describe">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
                    </BannerRight>
                    <BannerControl>
                        {/* ant design走马灯中提供了prev()和next()函数，可以调用该函数对轮播图进行切换 */}
                        <button className="btn left" onClick={(e) => {bannerRef.current.prev()}}></button>
                        <button className="btn right" onClick={(e) => {bannerRef.current.next()}}></button>
                    </BannerControl>
                </div>
            </BannerWrapper>
        </div>
    )
})
