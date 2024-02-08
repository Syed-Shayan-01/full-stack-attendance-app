import { Button } from "@/page/ui/button"
import Link from "next/link"

const Header = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Students</h1>
            <Link href={'/form'}><Button>Add Student</Button></Link>
        </div>

    )
}

export default Header;