import { Outlet } from "react-router-dom"
import Header from "./src/components/header"
import Sidebar from "./src/components/sidebar"

const RootLayout = () => {
    return (
        <div className='flex flex-col'>
            <Header />
            <div className="flex justify-between relative">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout