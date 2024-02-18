import "./layout.scss"
import Navbar from "../components/Navbar/Navbar.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

const Layout = () => {
    const queryClient = new QueryClient

    return (
      <QueryClientProvider client={queryClient}>
        <div className="layout">
            <Navbar />
            <div className="mainPage">
                <Outlet />
                <Sidebar />
            </div>
        </div>
      </QueryClientProvider>
    )
}

export default Layout;