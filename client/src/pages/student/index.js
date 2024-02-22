import { DeleteIcon, FileEditIcon } from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Header from "@/components/header/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import baseUrl from "@/config/baseUrl"
import { useRouter } from "next/router"
import Image from "next/image"

export default function Student() {
    const [FetchedData, setFetchedData] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.replace("./login/"); // Redirect to login page if token doesn't exist
        }
    }, [router]);

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
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&amp;_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        id
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Profile Img
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Name
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Course Name
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Password
                                    </th>
                                </tr>
                            </thead>
                            {FetchedData.map((item) => {
                                return (
                                    <tbody key={item.id} className="[&amp;_tr:last-child]:border-0">
                                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1</td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                <Image src={`${item.isImage}`} alt="profile image"
                                                    style={{
                                                        aspectRatio: "200/200",
                                                        objectFit: "cover",
                                                    }}
                                                    className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                                                    width={400} height={400}>
                                                </Image>
                                            </td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{item.name}</td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{item.course}</td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{item.password}</td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                <FileEditIcon onClick={() => window.location.href = `./updateForm/${item._id}`} />
                                            </td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                <DeleteIcon className=" cursor-pointer" onClick={() => { handleDelete(item._id) }} />
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </main >
        </div >
    )
}
