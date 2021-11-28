import React, { memo, useEffect } from 'react';
import { withRouter } from "react-router";
import { 
    HeaderWrapper,
    HeaderLeft,
    HeaderRight 
} from './style'
import { headerLinks } from '@/common/local_data';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function HYAppHeader(props) {
    // 监听路由变化给发现音乐添加类名active,有问题未解决
    useEffect(() => {
        if(props.location.pathname.split('/')[2] === "recommend") {
            let obj= document.getElementsByClassName("select-item")[0].childNodes;
            obj[0].classList.add("active");
            console.log(obj[0].className);
        }
        
    }, [])


    // *******************************
    function showSelectItem(item, index) {
        if(index < 3) {
            return (
                <NavLink to={item.link} exact>
                    {item.title}
                    <i className="icon sprite_01" ></i>
                </NavLink>)
        }else {
            // 当您的页面链接至使用 target="_blank" 的另一个页面时，新页面将与您的页面在同一个进程上运行。 如果新页面正在执行开销极大的 JavaScript，您的页面性能可能会受影响。
            // 因此需要加上 rel="noopener noreferrer"
            return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
        }
    }
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01"> </a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div className="select-item" key={item.title}>
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined style={{color: '#ccc'}}/>} />
                    <button className="creator">创作者中心</button>
                    <div className="login-wrapper">
                        <a href="#/" className="login-button">
                            登录
                        </a>
                    </div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
}
export default memo(withRouter(HYAppHeader));
