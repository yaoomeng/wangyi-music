import HYDiscover from '@/pages/discover';
import HYFriend from '@/pages/friend';
import HYMine from '@/pages/mine';

const routes = [
    {
        path: '/',
        component: HYDiscover,
        exact: true
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