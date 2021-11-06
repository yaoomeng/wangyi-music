import React, { memo } from 'react';
import { footerLinks, footerImages } from '@/common/local_data';
import { 
    FooterWrapper,
    FooterLeft,
    FooterRight
} from './style';
import { HeaderRight } from '../app-header/style';
export default memo(function HYAppFooter() {
    const showLine = (index) => {
        if(index<5) {
            return (
                <span className="line">|</span>
            ) 
        }
    }
    return (
        <div className="footer-wrapper" style={{height: "172px", borderTop: "1px solid #d3d3d3", background: "#f2f2f2"}}>
        <FooterWrapper className="wrap-v2">
            <FooterLeft>
                <p className="link">
                    {
                        footerLinks.map((item, index) => {
                                return (
                                    <>
                                        <a 
                                            href={item.link}
                                            key={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item.title}
                                        </a>
                                        { showLine(index) }
                                    </>
                                )
                        }) 
                    }
                </p>
                <p className="copyright">
                    <span className="copyright-span">网易公司版权所有©1997-2021</span>
                    <span>杭州乐读科技有限公司运营：</span>
                    <a rel="noreferrer" href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png" target="_blank">浙网文[2021] 1186-054号</a>
                </p>
                <p className="report">
                    <span className="report-span">违法和不良信息举报电话：0571-89853516</span>
                    <span>举报邮箱：</span>
                    <a className="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
                </p>
                <p className="system">
                    <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank" className="system-left">粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target="_blank">
                        <span className="police-text">浙公网安备 33010902002564号</span>
                    </a>
                </p>
            </FooterLeft>
            <FooterRight>
                <ul className="logo-unit">
                    {
                        footerImages.map((item, index) => {
                            return (
                                <li 
                                    className={`li${index}`}
                                    key={index}
                                >
                                    <a href={item.link} className={`logo${index}`}> </a>
                                    <span className={`title${index}`}></span>
                                </li>
                            )
                        })
                    }
                </ul>
            </FooterRight>
            
        </FooterWrapper>
        </div>
    )
})
