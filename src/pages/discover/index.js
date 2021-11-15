import React, { memo } from 'react';
import { discoverMenu } from '@/common/local_data';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'


import {
    DiscoverWrapper
} from './style.js';
export default memo(function HYDiscover(props) {
    return (
        <DiscoverWrapper>
            <div className="top wrap-v1">
                <div className="discoverNav">
                    {
                        discoverMenu.map((item, index) => {
                            return (
                                <div 
                                    className={`item${index}`}
                                    key={item.title}
                                >
                                    {/* <div className="item-title"><NavLink to={item.link}>{item.title}</NavLink></div> */}
                                    {/* <div ><NavLink className="item-title" to={item.link}>{item.title}</NavLink></div> */}
                                    <NavLink className="item-title" to={item.link}><em>{item.title}</em></NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {renderRoutes(props.route.routes)}
            

        </DiscoverWrapper>
    )
})
