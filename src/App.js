import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Experience from './screens/Experience';
import Formation from './screens/Formation';
import Hobbie from './screens/Hobbie';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import NormalizeStyles from './shared/NormalizeStyles';
import Header from './components/Header/Header';

const router = createBrowserRouter ([
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/formation',
    element: <Formation />,
  },
  {
    path: '/hobbie',
    element: <Hobbie />,
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

function App() {
  return (
    <>
      <NormalizeStyles />
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;