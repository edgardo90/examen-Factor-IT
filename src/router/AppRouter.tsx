
import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { NotFound } from '../pages/NotFound'

const routesConfig: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <NotFound />
    }
]

const router = createBrowserRouter(routesConfig)

export default router
