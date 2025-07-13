
import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { NotFound } from '../pages/NotFound';
import { GeneralLayout } from '../componets/GeneralLayout'
import { Login } from '../pages/login/Login'
import { MyPurchases } from '../pages/user/MyPurchases';

const routesConfig: RouteObject[] = [
    {
        path: '/',
        element: <GeneralLayout />,
        children: [
            { path: '/', element: <Home /> },
        ],
    },
    {
        path: '/login',
        element: <GeneralLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            }
        ]
    },
    {
        path: '/user',
        element: <GeneralLayout />,
        children: [
            { path: '/user/mypurchases', element: <MyPurchases /> },
        ],
    },
    {
        path: '*',
        element: <GeneralLayout />,
        children: [
            {
                path: '*',
                element: <NotFound />
            },
        ],
    }
]

const router = createBrowserRouter(routesConfig)

export default router
