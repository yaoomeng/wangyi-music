import styled from "styled-components";

export const DiscoverWrapper = styled.div`
    /* height: 30px; */
    width: 100%;
    /* background-color: #C20C0C; */
    box-sizing: border-box;
    /* border-bottom: 1px solid #a40011; */
    .top {
        background-color: #C20C0C;
        border-bottom: 1px solid #a40011;
        height: 30px;
        width: 100%;
        .discoverNav {
            width: 744px;
            height: 30px;

            padding-left: 180px;
            position: relative;
            &>div {
                position: absolute;
                text-decoration: none;
                text-align: center;
                .item-title { 
                    display: block;
                    height: 20px;
                    line-height: 20px;
                    padding: 0 13px;
                    margin: 7px 17px 0;
                    border-radius: 20px;
                    color: #fff;
                    text-decoration: none;
                    &.active{
                        background: #9B0909;
                    }
                    &:hover {
                        background: #9B0909;
                    }
                }
                
            }
            div:nth-of-type(1) {
                left: 180px;
                top: -5px;
            }
            div:nth-of-type(2) {
                left: 260px;
                top: -5px;
            }
            div:nth-of-type(3) {
                left: 350px;
                top: -5px;
            }
            div:nth-of-type(4) {
                left: 425px;
                top: -5px;
            }
            div:nth-of-type(5) {
                left: 530px;
                top: -5px;
            }
            div:nth-of-type(6) {
                left: 610px;
                top: -5px;
            }
        }
       
    }

`