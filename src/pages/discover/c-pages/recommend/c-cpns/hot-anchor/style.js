import styled from "styled-components";
export const HotAnchorWrapper = styled.div`
    width: 250px;
    height: 294px;
    margin: 20px 0 0 20px;
    .anchor-title {
        width: 210px;
        height: 24px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        h3 {
            font-size: 12px;
            color: #333;
            font-weight: bold;
        }        
    }
    .anchor-list {
        
        .anchor {
            display: flex;
            width: 210px;
            height: 50px;
            .info {
                margin-left: 10px;
                width: 160px;
                .info-top { 
                    height: 21px;
                    a {
                        color: #000;
                    }            
                }
                .info-bottom {
                    color: #666;
                    height: 21px;
                }
            }
        }
    }

`