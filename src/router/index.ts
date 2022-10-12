import App from '@/app';
import Home from '@/pages/Home/index';
import About from '@/pages/About/index';

export const routeConfig = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Home },
        childRoutes: [
            { path: 'about', component: About }
        ]
    }
]