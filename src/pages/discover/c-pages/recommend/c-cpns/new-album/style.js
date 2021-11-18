import styled from "styled-components";
export const AlbumWrapper = styled.div`
    margin-top: 50px;
    .content {
        height: 186px;
        margin: 20px 0 37px;
        
        border: 1px solid #d3d3d3;
        .inner {
            height: 184px;
            background: #f5f5f5;
            border: 1px solid #fff;
            padding-left: 16px;
            position: relative;
            .album {
                width: 640px;
                height: 150px;
                margin-top: 28px; 
                padding-left: 5px;
                padding-right: 5px;
                .page {
                    display: flex !important;
                    justify-content: space-between;
                    align-items: center;
                }
            }
            .arrow {
                display: inline-block;
                position: absolute;
                width: 25px;
                height: 25px;
                transform: translateY(-50%);
                cursor: pointer;
                
            }
            .arrow-left {
                top: 50%;
                left: 3px;
                background-position: -260px -75px;
                &:hover {
                    background-position: -280px -75px;
                }
            }
            .arrow-right {
                top: 50%;
                right: 3px;
                background-position: -300px -75px;
                &:hover {
                    background-position: -320px -75px;
                }
            }
        }
        
    }
`