import { AppLayout } from "./AppLayout";
import Dashboard from "./components/Dashboard";
import { Login } from "./components/Login/Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
]);
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
