
import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { NotFound } from '../pages/NotFound';
import { MainLayout } from '../componets/GeneralLayout'

const routesConfig: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
        ],
    },
    // {
    //     path: '/',
    //     element: <Home />,
    // },
    {
        path: '*',
        element: <NotFound />
    }
]

const router = createBrowserRouter(routesConfig)

export default router
