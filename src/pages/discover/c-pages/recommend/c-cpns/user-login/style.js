import styled from "styled-components";
export const Wrapper = styled.div`
    width: 250px;
    height: 126px;
    font-size: 12px;
    color: #333;
    background-position: 0 0;
    .login-txt {
        width: 205px;
        height: 44px;
        line-height: 22px;
        box-sizing: content-box;
        margin: 0 auto;
        padding: 16px 0;
        color: #666;
    }
    .login-btn {
        display: block;
        margin: 0 auto;
        width: 100px;
        height: 31px;
        background-position: 0 -195px;
        color: #fff;
        line-height: 31px;
        text-align: center;
        text-decoration: none;
        &:hover {
            background-position: -110px -195px;
        }
    }
`