import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Header from './Header';
import Browse from './BrowsePage/Browse'; 

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '/',
          element: <Signup />,
        },
        {
          path: 'signin',
          element: <Signin />,
        },
        {
          path: 'home',
          element: <Browse />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
