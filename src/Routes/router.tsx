import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import About from '../pages/About'
import Home from '../pages/Home'

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/pricing',
                element: <div>pricing</div>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <div>contact</div>
            }
        ]
    }
])