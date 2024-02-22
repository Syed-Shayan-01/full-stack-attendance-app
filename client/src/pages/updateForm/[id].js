import { Label } from "@/page/ui/label";
import { Input } from "@/page/ui/input";
import { Button } from "@/page/ui/button";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "@/config/baseUrl";

export default function Form() {
    const router = useRouter();
    const { id } = router.query;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')
    const [course, setcourse] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${baseUrl}attendUpdate/${id}`, { name, email, password, course, phoneNumber });
            router.push('/student');
        } catch (error) {
            console.error("Update failed", error);
        }
    };
    return (
        <div className="mx-auto max-w-[350px] space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Student Attendance Form</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Please fill in the details below
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="student-image">Upload Student Image</Label>

                            <Input
                                id="student-image"
                                type="file"
                                // onChange={handleImage}
                                className="hidden"
                            // ref={imageRef}
                            />
                            {/* <div className="mt-4">
                                <label htmlFor="student-image">
                                    {image ? (
                                        <img
                                            className="w-32 h-32 mx-auto rounded-full object-cover cursor-pointer"
                                            height="200"
                                            src={URL.createObjectURL(image)}
                                            style={{
                                                aspectRatio: "200/200",
                                                objectFit: "cover",
                                            }}
                                            width="200"
                                        />
                                    ) : (
                                        <img
                                            className="w-32 h-32 mx-auto rounded-full object-cover cursor-pointer"
                                            height="200"
                                            src={image}
                                            style={{
                                                aspectRatio: "200/200",
                                                objectFit: "cover",
                                            }}
                                            width="200"
                                        />
                                    )}
                                </label>
                            </div> */}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="student-name">Student Name</Label>
                            <Input
                                id="student-name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="john@example.com"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                value={password}
                                onChange={(e) => {
                                    setpassword(e.target.value);
                                }}
                                type="password"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="course">Course</Label>
                            <Input
                                id="course"
                                value={course}
                                onChange={(e) => {
                                    setcourse(e.target.value);
                                }}
                                placeholder="Computer Science"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone-number">Phone Number</Label>
                            <Input
                                id="phone-number"
                                value={phoneNumber}
                                onChange={(e) => {
                                    setphoneNumber(e.target.value);
                                }}
                                placeholder="+1 234 567 890"
                            />
                        </div>
                        <Button className="w-full" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
