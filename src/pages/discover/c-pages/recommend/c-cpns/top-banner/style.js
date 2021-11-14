import styled from 'styled-components';
export const BannerWrapper = styled.div`
    height: 270px;
    background-color: transparent;
    background: url(${(props) => props.bgImage});
    background-size: 6000px;
    background-position: center;
    .banner {
        display: flex;
        height: 100%;
        background-color: white;
    }
`
export const BannerLeft = styled.div`
    width: 730px;
    height: 100%;
    background-color: brown;
    .banner-item {
        overflow: hidden;
        height: 270px;
        .image {
            width: 730px;
        }
    }
    .ant-carousel .slick-dots .slick-active button{
        background: url(${require("@/assets/img/banner_sprite.png").default}) no-repeat -16px -343px;

    }
    .ant-carousel .slick-dots li button {
        background-color: red;
        width: 20px;
        height: 20px;
        margin-left: -5px;
        background: url(${require("@/assets/img/banner_sprite.png").default}) no-repeat 3px -343px;
        &:hover {
            background-position: -16px -343px;
        }
    }
`
export const BannerRight = styled.div`
    width: 254px;
    height: 270px;
    background-color: white;
    background: url(${require("@/assets/img/download.png").default}) no-repeat 0 0;
    .right-btn {
        display: block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
        background-position: 0 9999px;
        &:hover {
            /* background-color: white; */
            background: url(${require("@/assets/img/download.png").default}) no-repeat 0 -290px;
        }
    }
    .describe {
        color: #8d8d8d;
        text-align: center;
        margin: 5px auto;
    }
`
export const BannerControl = styled.div`
  position: absolute;
  margin-top: 34px;
  height: 63px;
  /* 使元素水平垂直居中 */
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background: url(${require("@/assets/img/banner_sprite.png").default});
    background-color: transparent;
    /* 规定显示光标的类型为手 */
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: 68px;
    background-position: 0 -360px;
  }

  .right {
    right: 68px;
    background-position: 0 -508px;
  }
`