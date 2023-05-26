
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import ViewDetails from '../Pages/ViewDetails';
import PrivateRoute from './PrivateRoute';
import Error from '../Pages/Error';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog/',
                element: <Blog></Blog>
            },
            {
                path: '/Login',
                element: <Login> </Login>,

            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/:id',
                element: <PrivateRoute><ViewDetails> </ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://reciba-server.vercel.app/chefs/${params.id}`)
            }
        ]
    }
]);

export default router 
