import { Button } from "@/page/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/page/ui/table"
import { AvatarImage, Avatar } from "@/page/ui/avatar"
import { DeleteIcon, FileEditIcon } from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Header from "@/components/header/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import baseUrl from "@/config/baseUrl"
import Link from "next/link"

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


    // delete user funtion

    const handleDelete = (id) => {
        try {
            axios.delete(`${baseUrl}deleteUser/${id}`).then((response) => {
                setFetchedData(prevData => prevData.filter(item => item._id !== id));
                console.log(response)
            });
        } catch (error) {

        }
    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <Navbar />
            <main className="flex-1 p-6">
                <Header />
                <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
                    <div className="w-full">
                        <ul className=" flex justify-between text-lg font-bold">
                            <li>id</li>
                            <li>Image</li>
                            <li>Name</li>
                            <li>Course</li>
                            <li>Password</li>
                            <li>Edit</li>
                            <li>Delete</li>
                        </ul>
                        <div  >
                            {FetchedData.map((items) => {
                                return (
                                    <ul key={items.id} className="flex justify-between  text-sm">
                                        <li>{items.id}</li>
                                        <li>
                                            <Avatar>
                                                <img alt={items.name} src={items.isImage} className="w-10 rounded-full" />
                                            </Avatar>
                                        </li>
                                        <li>{items.name}</li>
                                        <li>{items.course}</li>
                                        <li>{items.password}</li>
                                        <li>
                                            <Link href={'./form/'}><FileEditIcon className="text-gray-600" /></Link>
                                        </li>
                                        <li>
                                            <DeleteIcon onClick={() => { handleDelete(items._id) }} className="text-gray-600" />
                                        </li>
                                    </ul>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
