import { LogOutIcon, SchoolIcon, TicketIcon } from "lucide-react"
import Link from "next/link"


const Navbar = () => {
    return (
        <>
            <aside className="w-full md:w-64 bg-white p-6">
                <div className="mb-10">
                    <span className="text-2xl font-bold">Logo</span>
                </div>
                <nav className="space-y-2">
                    <a className="flex items-center space-x-2 text-blue-600" href="#">
                        <SchoolIcon className="h-6 w-6" />
                        <span className="font-medium">Students</span>
                    </a>
                    <a className="flex items-center space-x-2 text-gray-600" href="#">
                        <TicketIcon className="h-6 w-6" />
                        <span className="font-medium">Attendance</span>
                    </a>
                    <a className="flex items-center space-x-2 text-gray-600" href="#">
                        <LogOutIcon className="h-6 w-6" />
                        <span className="font-medium">Logout</span>
                    </a>
                </nav>
            </aside>
        </>
    )
}

export default Navbar
