import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
    HeaderWrapper
} from './style'
const hasDevider = function(index) {
    if(index<4) {
        return(<span className="divider">|</span>);
    }
}
const HYThemeHeaderRCM = memo(function(props) {
    // 第一种方法
    // const { title, keywords=[] } = props;
    // 第二种方法使用PropTypes
    const { title, keywords } = props;
    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                {/* <i className="icon sprite_02"></i> */}
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {keywords.map((item, index) => {
                        return (
                            <div className="item" key={item}>
                                <a href="todo">{item}</a>
                                {/* <span className="divider">|</span> */}
                                {hasDevider(index)}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="right">
                <a href="todo">
                    更多
                    <i className="icon sprite_02"></i>
                </a>
            </div>
        </HeaderWrapper>
    )
})
// 第二种方法使用PropTypes
HYThemeHeaderRCM.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}
HYThemeHeaderRCM.defaultProps = {
    keywords: []
}
export default HYThemeHeaderRCM;
