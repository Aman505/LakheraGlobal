import { Outlet, useLocation } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Headers from "./components/Header/Header"

export const AppLayout = () => {
    const location = useLocation();
    const hide = ['/'].includes(location.pathname)
    return (
        <>
            {!hide && < Headers />}
            <Outlet />
            {!hide && <Footer />}
        </>
    )
}