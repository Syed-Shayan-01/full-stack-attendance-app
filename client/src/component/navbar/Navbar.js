import Link from "next/link"


const Navbar = () => {
    return (
        <>
            <nav className="w-full md:w-64 bg-white shadow-md">
                <div className="flex flex-col items-center py-4">
                    <div className="text-2xl font-bold mb-4">Logo</div>
                    <div className="flex flex-col w-full px-4">
                        <Link className="flex items-center py-3 px-2 rounded-md hover:bg-gray-200" href='./student/'>
                            <UserIcon className="h-6 w-6 text-gray-600 mr-3" />
                            Students
                        </Link>
                        <Link className="flex items-center py-3 px-2 rounded-md  hover:bg-gray-200" href="./attend/">
                            <ClipboardListIcon className="h-6 w-6 mr-3" />
                            Attendance
                        </Link>
                        <Link className="flex items-center py-3 px-2 rounded-md hover:bg-gray-200 mt-auto" href="#">
                            <LogOutIcon className="h-6 w-6 text-gray-600 mr-3" />
                            Logout
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

function ClipboardListIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
        </svg>
    )
}


function LogOutIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    )
}


function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
