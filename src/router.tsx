import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
