import styled from 'styled-components';

export const PlaybarWrapper = styled.div`
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat; 
    .content {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: space-between;
        height: 47px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`
export const Control = styled.div`
    display: flex;
    align-items: center;
    .prev, .next {
        width: 28px;
        height: 28px;
    }
    .prev {
        background-position: 0 -130px;
    }
    .play {
        width: 36px;
        height: 36px;
        margin: 0 8px;
        background-position: 0 ${props => props.isPlaying ? "-165px": "-204px"};
    }
    .next {
        background-position: -80px -130px;
    }
`

export const PlayInfo = styled.div`
    display: flex;
    .image {
      width: 35px;
      height: 35px;
      position: relative;
      .cover {
        background-position: 0 -80px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
    .info {
        height: 37px;
        width: 581px;
        margin-left: 16px;
        position: relative;
       .song {
           display: flex;
           .song-name {
               display: block;
               max-width: 300px;
               height: 28px;
               line-height: 28px;
               color: #e8e8e8;
           }
           .artist-name {
               display: block;
               max-width: 220px;
               margin-left: 15px;
               height: 28px;
               line-height: 28px;
               color: #9b9b9b;
           }
       }
       .progress {
            display: flex;
            position: absolute;
            bottom: 10px;
            left: 0;
            height: 9px;
            .slide.ant-slider {
                width: 466px;
                height: 9px;
                background-position: right 0;
                .ant-slider-rail {
                    background: url(${require("@/assets/img/statbar.png").default});
                    width: 93%;
                    height: 100%;
                    background-position: right -30px;
                    bottom: 0px;
                }
                .ant-slider-track {
                    background: url(${require("@/assets/img/statbar.png").default});
                    background-position: left -66px;
                    height: 100%;
                    bottom: 0px;
                }
                .ant-slider-step {
                    display: none;
                }
                .ant-slider-handle {
                    background: url(${require("@/assets/img/sprite_icon.png").default});
                    background-position: 0px -250px;
                    margin-top: -10px;
                    width: 22px;
                    height: 24px;
                    border: none;
                    bottom: -6px;
                    &:hover {
                        background-position: 0 -280px;
                    }
                }
            }
            .time {
                /* line-height: 32px; */
                /* margin-bottom: 5px; */
                .now-time {
                    color: #a1a1a1;
                }
                .divider {
                    color: #797979;
                }
                .duration {
                    color: #797979;
                }
            }
       } 
    }
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`