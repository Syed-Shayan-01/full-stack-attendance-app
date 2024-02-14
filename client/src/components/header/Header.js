import { Button } from "@/page/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react";

const Header = () => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const authToken = localStorage.getItem("token");
        if (authToken) {
            setToken(authToken);
        }
    }, []);
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Students</h1>
            {token && <Link href={'/form'}><Button>Add Student</Button></Link>}
        </div>

    )
}

export default Header;