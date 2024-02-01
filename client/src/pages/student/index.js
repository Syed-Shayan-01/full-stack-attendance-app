import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { FileEditIcon } from "lucide-react"
import Navbar from "@/component/navbar/Navbar"

export default function Student() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <Navbar />
            <main className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Students</h1>
                    <Button>Add Student</Button>
                </div>
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


