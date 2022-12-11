import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Pricing from '../pages/Pricing'

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
                element: <Pricing />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])