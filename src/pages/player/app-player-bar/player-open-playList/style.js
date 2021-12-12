import styled from "styled-components";
export const PlayListWrapper = styled.div`
    display: ${props => props.isShowList ? 'block' : 'none'};;
    width: 986px;
    height: 301px;
    position: fixed;
    bottom: 46px;
    left: 50%;
    transform: translateX(-50%);
    .list-head {
        height: 41px;
        position: relative;
        line-height: 41px;
        background-position: 0 0;
        h4 {
            position: absolute;
            left: 25px;
            color: #e2e2e2;
            font-size: 14px;
            font-weight: bold;
        }
        .collect {
            position: absolute;
            left: 398px;
            color: #ccc;
            .playlist2_bg {
                display: inline-block;
                width: 16px;
                height: 16px;
                background-position: -24px 0;
                margin-right: 3px;
                transform: translateY(30%);
                &:hover {
                    background-position: -24px -20px;
                }
            }
        }
        .clear {
            position: absolute;
            left: 490px;
            color: #ccc;
            .playlist2_bg {
                display: inline-block;
                width: 16px;
                height: 16px;
                background-position: -51px 0;
                margin-right: 3px;
                transform: translateY(30%);
                &:hover {
                    background-position: -51px -20px;
                }
            }
        }
        .song-name {
            position: absolute;
            width: 346px;
            left: 595px;
            text-align: center;
            color: #fff;
            font-size: 14px;
        }
        .close {
            position: absolute;
            display: inline-block;
            width: 30px;
            height: 30px;
            top: 6px;
            right: 8px;
            cursor: pointer;
            background-position: -195px 9px;
            &:hover {
                background-position: -195px -21px;
            }
        }
    }
    .content {
        width: 986px;
        height: 260px;
        display: flex;
        background-position: 0 0;
        background-repeat: repeat-y;
        background-position: -1014px 0;
        
        .left {
            z-index: 99999;
            width: 558px;
            height: 260px; 
            background: #121212;
            opacity: .8;
            .song-item {
                height: 28px;
                line-height: 28px;
                display: flex;
                color: #ccc;
                cursor: pointer;
              
                &:hover{
                    background-color: rgba(0, 0, 0, 0.3);
                    color: #fff;
                    background: #000;
                    opacity: 1;
                }
                &:active{
                    background-color: rgba(0, 0, 0, 0.3);
                    color: #fff;
                    background: #000;
                    opacity: 1;
                }
                .play-icon {
                    width: 20px;
                    padding: 0 0 0 10px;
                }
                .song-item-name {
                    width: 266px;
                    padding: 0 0 0 10px;

                }
                .operate-icon {
                    width: 88px;
                    display: flex;
                    .icon {
                        width: 16px;
                        height: 16px;
                        margin: 5px 0 0 6px;
                    }
                    .icon-add {             
                        background-position: -24px 0;
                        &:hover {
                            background-position: -24px -20px;
                        }
                    }
                    .icon-share {             
                        background-position: 0 0;
                        &:hover {
                            background-position: 0 -20px;
                        }
                    }
                    .icon-dwd {             
                        background-position: -57px -50px;
                        &:hover {
                            background-position: -80px -50px;
                        }
                    }
                    .icon-del {             
                        background-position: -51px 0;
                        &:hover {
                            background-position: -51px -20px;
                        }
                    }
                    
                }
                .songer-name {
                    width: 80px;
                    padding: 0 0 0 10px;
                }
                .song-time {
                    width: 45px;
                    padding: 0 0 0 10px;
                }
                .song-source {
                    width: 43px;
                    padding: 0 0 0 6px;
                    .source-icon {
                        display: block;
                        width: 14px;
                        height: 16px;
                        margin: 7px 0 0;
                        float: right;
                        background-position: -100px 0;
                        &:hover {
                            background-position: -80px 0;
                        }
                    }
                }
            }

        }
        .middle {
            height: 260px;
            width: 6px;
            background: #000;
            opacity: .5;
        }
        .right {
            z-index: 99999;
            width: 420px;
            height: 250px;
            background: #121212;
            position: relative;
           
            /* 滚动条 */
            overflow-y: scroll;
            overflow: hidden;
            padding: 21px 0 20px 0;
             /* 设置滚动条的样式 */
            ::-webkit-scrollbar {
                width:6px;
                
            }

            /* 滚动槽 */
            ::-webkit-scrollbar-track {
                background: #000;
                opacity: .5;
            }

            /* 滚动条滑块 */
            ::-webkit-scrollbar-thumb {
                cursor: pointer;
                border-radius:5px;
                background: #868686;
                border: 1px solid #a6a6a6;
            }
            .lyric-wrapper {
                width: 354px;
                height: 219px;
                /* margin: 21px 0 20px 0; */
                position: absolute;
                right: 40px;
                top: 0;
                /* overflow-y: scroll; */
                .lyric-item {
                    text-align: center;
                    color: #989898;
                    height: 32px;
                    line-height: 32px;
                    opacity: 1;
                }
                .checked-lyric {
                    color: #fff;
                    font-size: 14px;
                    transition: color 0.7s linear;
                }
            }
            
        }
       
    }
    
`