import baseUrl from '@/config/baseUrl';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { GraduationCapIcon } from 'lucide-react';
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };
        try {
            if (email && password) {
                const response = await fetch(`${baseUrl}auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                console.log(result)
                if (result.status === 200) {
                    localStorage.setItem('token', result.token);
                    router.replace('./student')
                }

            } else {
                alert('Please enter the email, password')
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            router.replace("/student"); // Redirect to login page if token doesn't exist
        }
    }, []);

    return (
        <div className="min-h-screen bg-blue-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className=" m-auto font-bold text-blue-500"><GraduationCapIcon size={80} /></h2>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Email address"
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => { setemail(e.target.value) }}
                    />
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Password"
                        type="password"
                        name='email'
                        value={password}
                        onChange={(e) => { setpassword(e.target.value) }}
                    />
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white w-full">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login