import { Button } from "@/page/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/page/ui/table"
import { AvatarImage, Avatar } from "@/page/ui/avatar"
import { DeleteIcon, FileEditIcon } from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Header from "@/components/header/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import baseUrl from "@/config/baseUrl"
import Image from "next/image"

export default function Student() {
    const [FetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        try {
            axios.get(`${baseUrl}getallUser`).then((response) => {
                const data = response.data;

                if (data) {
                    const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                    setFetchedData(dataArray);
                }
            })
        } catch (error) {
            throw error;
        }
    }, [])
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <Navbar />
            <main className="flex-1 p-6">
                <Header />
                <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-lg font-bold">
                                <th className="px-4 py-2">id</th>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Course Name</th>
                                <th className="px-4 py-2">Password</th>
                                <th className="px-4 py-2">Edit</th>
                                <th className="px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody >
                            {FetchedData.map((items) => {
                                return (
                                    <tr key={items.id} className="text-sm">
                                        <td className=" px-4 py-2">{items.id}</td>
                                        <td className=" px-4 py-2">
                                            <Avatar>
                                                <img alt={items.name} src={items.isImage} className="w-10 rounded-full" />
                                            </Avatar>
                                        </td>
                                        <td className=" px-4 py-2">{items.name}</td>
                                        <td className=" px-4 py-2">{items.course}</td>
                                        <td className=" px-4 py-2">{items.password}</td>
                                        <td className=" px-4 py-2">
                                            <FileEditIcon className="text-gray-600" />
                                        </td>
                                        <td className=" px-4 py-2">
                                            <DeleteIcon className="text-gray-600" />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
