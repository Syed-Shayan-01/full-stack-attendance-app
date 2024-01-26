import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { TableHead, TableRow, TableHeader, TableBody, Table } from "@/components/ui/table"
import Navbar from "../../component/navbar/Navbar"
import { Button } from "@/components/ui/button"
import Header from "@/component/header/Header"

export default function Attendance() {
    return (
        <>

            <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
                <Navbar />
                <main className="flex-1 p-6">
                    <Header />
                    <div className="p-6">
                        <div className="bg-white shadow-md rounded-md p-6">
                            <div className="flex items-center mb-4">
                                <Avatar className="mr-3">
                                    <AvatarImage alt="Profile image" src="/placeholder.svg?height=40&width=40" />
                                    <AvatarFallback>AB</AvatarFallback>
                                </Avatar>
                                <h1 className="text-xl font-semibold">Attendance</h1>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>id</TableHead>
                                        <TableHead>Profile Img</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Checked In Time</TableHead>
                                        <TableHead>Checked Out Time</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody />
                            </Table>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

