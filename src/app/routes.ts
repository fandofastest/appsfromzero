import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'privacy-policy',
        Component: PrivacyPolicy,
      },
    ],
  },
]);
