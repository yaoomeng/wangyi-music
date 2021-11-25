import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
    flex: 1;
    .header {
        display: flex;
        height: 100px;
        padding: 20px 0 0 19px;
        .header-img {
            position: relative;
            width: 80px;
            height: 80px;
            a {
                display: inline-block;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                text-indent: -9999px;
                background-position: -145px -57px ;
            }
        }
        .info {
            margin: 6px 0 0 10px;
            .btn {
                display: inline-block;
                text-indent: -9999px;
                width: 22px;
                height: 22px;
                margin: 8px 10px 0 0;
                cursor: pointer;
            }
            .play {
                background-position: -267px -205px;
                &:hover {
                    background-position: -267px -235px;
                }
            }
            .favor {
                background-position: -300px -205px;
                &:hover {
                    background-position: -300px -235px;
                }
            }
        }
        
    }
    .list {
        margin-top: 20px;
        .list-item {
            /* position: relative; */
            display: flex;
            height: 32px;
            width: 230px;
            padding-left: 20px;
            align-items: center;
            :nth-child(-n+3) .rank {
                color: #c10d0c;
            }
            .rank {
                font-size: 16px;
                width: 35px;
                height: 32px;
                line-height: 32px;
                text-align: center;               
            }
            .info {
                width: 170px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                .name {
                    display: inline-block;
                    height: 32px;
                    line-height: 32px;
                    flex: 1;
                    color: #000;
                
                }
                .operate {
                    /* position: absolute; */
                    /* right: 5px; */
                    display: flex;
                    align-items: center;
                    display: none;
                    width: 82px;
                    .btn {
                        width: 17px;
                        height: 17px;
                        margin-left: 8px;
                        cursor: pointer; 
                    }
                    .play {
                        background-position: -267px -268px;
                        &:hover {
                            background-position: -267px -288px;
                        } 
                    }

                    .addto {
                        position: relative;
                        top: 2px;
                        background-position: 0 -700px;
                        &:hover {
                            background-position: -22px -700px;
                        }
                    }

                    .favor {
                        background-position: -297px -268px;
                        &:hover {
                            background-position: -297px -288px;
                        } 
                    }
                }
            }
            
            &:hover {
                .operate {
                display: block;
                }
            }
        }
    }
    .footer {
        height: 32px;
        display: flex;
        align-items: center;
        margin-right: 32px;
        justify-content: flex-end;
        a {
            color: #000;
        }
    }
`