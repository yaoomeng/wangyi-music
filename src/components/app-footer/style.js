import styled from "styled-components";

export const FooterWrapper = styled.div`
    height: 115px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`
export const FooterLeft = styled.div`
    margin-top: 15px;
    width: 520px;
    height: 100px;
    p {
        height: 24px;
        line-height: 24px;
        color: #666;
    }
    p.link {
        a {
            color: #999;    
        }    
        .line {
            color: #c2c2c2;
            margin: 0 8px 0 10px;
        }
    }
    p.copyright {
        .copyright-span {
            margin-right: 14px;
        }
    }
    p.report {
        .report-span {
            margin-right: 14px;
        }
        .alink {
            color: #333;
        }
    }
    p.system {
        .system-left {
            margin-right: 8px;
        }
    }
    
`

export const FooterRight = styled.div`
    width: 420px;
    height: 70px;
    .logo-unit {
        display: flex;
        justify-content: space-around;
        &>li {
            display: block;
            width: 60px;
            height: 70px;
            margin: 0 auto;
            /* background-color: blue; */
            a {
                margin-top: 33px;
                display: block;
                width: 50px;
                height: 45px;
                background: url(${require("@/assets/img/sprite_footer_02.png").default}) no-repeat;;  
                background-size: 110px 450px;
            }
            span {
                margin-top: 5px;
                display: block;
                width: 72px;
                height: 14px;
                background: url(${require("@/assets/img/sprite_footer_01.png").default}) no-repeat;;  
                background-size: 180px 100px;
            }
        }
        .li0 {
            .logo0 {           
                background-position: -60px -101px;
            }
            .title0 {
                background-position: -1px -90px;
            }
        }
        .li1 {
            .logo1 {           
                background-position: 0 0;
            }
            .title1 {
                background-position: 0 0;
            }
        }
        .li2 {
            .logo2 {           
                background-position: -60px -50px;
            }
            .title2 {
                background-position: 0 -54px;
            }
        }
        .li3 {
            .logo3 {           
                background-position: 0px -101px;
            }
            .title3 {
                background-position: -1px -72px;
            }
        }
        .li4 {
            .logo4 {           
                background-position: 0px -50px;
            }
            .title4 {
                background-position: 0 -36px;
            }
        }
    }
`