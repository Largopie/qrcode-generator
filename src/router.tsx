import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import GlobalLayout from './layouts/GlobalLayout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <GlobalLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
