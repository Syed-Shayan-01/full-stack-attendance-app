import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import Navbar from "../../component/navbar/Navbar"
import Header from "@/component/header/Header"

export default function Student() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <Navbar />
            <main className="flex-1 p-6">
                <Header />
                <div className="bg-white p-6 rounded-lg shadow">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>id</TableHead>
                                <TableHead>Profile Img</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Course Name</TableHead>
                                <TableHead>Password</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage alt="Abdullah" src="/placeholder.svg?height=32&width=32" />
                                    </Avatar>
                                </TableCell>
                                <TableCell>Abdullah</TableCell>
                                <TableCell>Web And App</TableCell>
                                <TableCell>1234567</TableCell>
                                <TableCell>
                                    <FileEditIcon className="h-5 w-5 text-gray-600" />
                                </TableCell>
                                <TableCell>
                                    <DeleteIcon className="h-5 w-5 text-gray-600" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2</TableCell>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage alt="Bilal Raza" src="/placeholder.svg?height=32&width=32" />
                                    </Avatar>
                                </TableCell>
                                <TableCell>Bilal Raza</TableCell>
                                <TableCell>Web And App</TableCell>
                                <TableCell>1234567</TableCell>
                                <TableCell>
                                    <FileEditIcon className="h-5 w-5 text-gray-600" />
                                </TableCell>
                                <TableCell>
                                    <DeleteIcon className="h-5 w-5 text-gray-600" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>3</TableCell>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage alt="Abdul Qadir" src="/placeholder.svg?height=32&width=32" />
                                    </Avatar>
                                </TableCell>
                                <TableCell>Abdul Qadir</TableCell>
                                <TableCell>Web And App</TableCell>
                                <TableCell>1234567</TableCell>
                                <TableCell>
                                    <FileEditIcon className="h-5 w-5 text-gray-600" />
                                </TableCell>
                                <TableCell>
                                    <DeleteIcon className="h-5 w-5 text-gray-600" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>4</TableCell>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage alt="Ahbaab" src="/placeholder.svg?height=32&width=32" />
                                    </Avatar>
                                </TableCell>
                                <TableCell>Ahbaab</TableCell>
                                <TableCell>Web And App</TableCell>
                                <TableCell>1234567</TableCell>
                                <TableCell>
                                    <FileEditIcon className="h-5 w-5 text-gray-600" />
                                </TableCell>
                                <TableCell>
                                    <DeleteIcon className="h-5 w-5 text-gray-600" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </main>
        </div>
    )
}

function DeleteIcon(props) {
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
            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
            <line x1="18" x2="12" y1="9" y2="15" />
            <line x1="12" x2="18" y1="9" y2="15" />
        </svg>
    )
}


function FileEditIcon(props) {
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
            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
        </svg>
    )
}



