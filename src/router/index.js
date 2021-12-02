import { Redirect }  from "react-router-dom";
import React from 'react';
import HYDiscover from '@/pages/discover';
import HYFriend from '@/pages/friend';
import HYMine from '@/pages/mine';
import HYAlbum from '@/pages/discover/c-pages/album';
import HYArtist from '@/pages/discover/c-pages/artist';
import HYDjradio from '@/pages/discover/c-pages/djradio';
import HYRanking from '@/pages/discover/c-pages/ranking';
import HYRecommend from '@/pages/discover/c-pages/recommend';
import HYSongs from '@/pages/discover/c-pages/songs';
import HYPlayer from '@/pages/player';


const routes = [
    {
        path: '/',
        exact: true,
        render: ()=>{
           return <Redirect to="/discover"></Redirect>
        }
    },
    {
        path: '/discover',
        component: HYDiscover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: ()=>{
                    return <Redirect to="/discover/recommend"></Redirect>
                }
            },
            {
                path: '/discover/recommend',
                component: HYRecommend
            },
            {
                path: '/discover/album',
                component: HYAlbum
            },
            {
                path: '/discover/ranking',
                component: HYRanking
            },
            {
                path: '/discover/artist',
                component: HYArtist
            },
            {
                path: '/discover/djradio',
                component: HYDjradio
            },
            {
                path: '/discover/songs',
                component: HYSongs
            },
            {
                path: '/discover/player',
                component: HYPlayer
            }
        ]
    },
    {
        path: '/mine',
        component: HYMine
    },
    {
        path: '/friend',
        component: HYFriend
    },
    
];
export default routes;