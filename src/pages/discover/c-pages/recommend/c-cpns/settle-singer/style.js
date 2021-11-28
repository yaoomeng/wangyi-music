import styled from "styled-components";
export const Wrapper = styled.div`
    width: 250px;
    height: 455px;
    margin: 15px 0 0;

    .title {
        display: flex;
        justify-content: space-between;
        width: 210px;
        height: 24px;
        margin: 0 20px;
        font-size: 12px;
        margin-bottom: 17px;
        border-bottom: 1px solid #ccc;
        .left {
            color: #333;
            font-weight: bold;
        }
    }
    .singer-list {
        margin: 6px 0 14px 20px;
        li {
            width: 210px;
            margin-bottom: 15px;            
            .singer {
                display: flex;
                text-decoration: none;
                background: #fafafa;
                &:hover {
                    background: #f4f4f4;
                }
                .info {
                    width: 148px;
                    border: 1px solid #e9e9e9;
                    border-left: none;
                    padding-left: 14px;
                    .info-top {
                        font-size: 14px;
                        color: #333;
                        margin: 8px 0 0;
                    }
                    .info-bottom {
                        margin: 8px 0 0;
                        font-size: 12px;
                        font-weight: bold;
                        color: #666;
                        
                    } 
                }

            }
        }
        
    }
    .apply-btn {
        display: block;
        width: 210px;
        height: 31px;
        margin: 0 auto 15px;
        border-radius: 4px;
        background: #f3f3f3;
        border: 1px solid #cecece;
        div {
            width: 205px;
            height: 31px;
            line-height: 31px;
            color: #333;
            display: inline-block;
            font-weight: bold;
            text-align: center;
        }
    }

`