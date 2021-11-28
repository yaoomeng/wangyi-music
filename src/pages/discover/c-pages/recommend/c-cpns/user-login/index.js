import React, { memo } from 'react';
import {
    Wrapper
} from './style';

export default memo(function HYUserLogin() {
    return (
        <Wrapper className="sprite_02">
            <div className="login-txt">
                登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
            </div>
            <a href="/todo" className="login-btn sprite_02">用户登录</a>
        </Wrapper>
    )
})
