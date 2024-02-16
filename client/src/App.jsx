import './App.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';

const App = () => {

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
      </QueryClientProvider>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
