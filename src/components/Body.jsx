import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Header from './Header';
import Browse from './BrowsePage/Browse';
import ErrorPage from './BrowsePage/ErrorPage';

const GeminiSearchPage = lazy(() => import('./BrowsePage/GeminiSearchPage'));

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
      errorElement: <ErrorPage />,
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
        {
          path: 'gemini',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <GeminiSearchPage />
            </Suspense>
          ),
        }
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
