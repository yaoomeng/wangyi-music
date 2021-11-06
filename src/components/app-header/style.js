import styled from "styled-components";

export const HeaderWrapper = styled.div`
    height: 75px;
    background-color: #242424;
    font-size: 14px;

    .content {
        height: 70px;
        display: flex;
        justify-content: space-between;
    }
    .divider {
        height: 5px;
        background-color: #C20C0C;
    }
`
export const HeaderLeft = styled.div`
    display: flex;
    .logo {
        /* a元素不能设置宽度和高度，因此需要转换成块元素 */
        display: block; 
        width: 176px;
        height: 69px;
        background-position: 0 0;
    }
    .select-list {
        display: flex;
        .select-item {
            position: relative;
            a {
                display: block;
                padding: 0 19px;
                text-align: center;
                line-height: 70px;
                color: #ccc;
            } 
            :last-of-type a {
                position: relative;
                ::after {
                    position: absolute;
                    display: block;
                    content: "";
                    background-image: url(${require("@/assets/img/sprite_01.png").default});
                    top: 21px;
                    left: 100px;
                    width: 28px;
                    height: 19px;
                    background-position: -190px 0;
                }
            }
            &:hover a, a.active {
                color: #fff;
                background: #000;
                text-decoration: none;
            }
            a.active .icon {
                display: block;
                position: absolute;
                left: 50%;
                top: 64px;
                width: 12px;
                height: 7px;
                margin-left: -6px;
                overflow: hidden;
                background-position: -226px 0;
            }
        }
        
        
    }
`
export const HeaderRight = styled.div`
    display: flex;
    font-size: 12px;
    .search {
        height: 32px;
        width: 158px;
        margin-top: 19px;
        background-color: #fff;
        border-radius: 32px;
        input {
            &::placeholder {
                font-size: 12px;
            }
        }
        &:hover {
            border-color: #fff;
        }
    }
    .creator {
        color: #ccc;
        border-radius: 20px;
        width: 90px;
        height: 32px;
        margin: 19px 0 0 12px;
        border: 1px solid #4F4F4F;
        background-color: transparent;
        &:hover {
            border: 1px solid #ccc;
        }
    }
    .login-wrapper {
        width: 50px;
        height: 45px;
        margin-top: 12.5px;
        line-height: 45px;
        margin-left: 20px;
        .login-button {
            display: block;
            width: 28px;
            color: #787878;
            &:hover {
                color: #ccc;
            }   
        }
    }
    
`