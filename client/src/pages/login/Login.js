import baseUrl from '@/config/baseUrl';
import React, { useState } from 'react'
import { useRouter } from 'next/router';
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };
        try {
            const response = await fetch(`${baseUrl}auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            localStorage.setItem('token', result.token)
            if (result) {
                router.replace('./student')
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="min-h-screen bg-blue-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-blue-800">Welcome to My Blogs</h2>
                </div>
                <p className="text-sm text-blue-800 mb-6">Sign in to continue to your account.</p>
                <div className="space-y-4 mb-4">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white w-full">
                        Continue with Google
                    </button>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <hr className="w-full" />
                    <span className="px-2 text-sm text-blue-800">or</span>
                    <hr className="w-full" />
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
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-green-500 text-white w-full">
                        Sign In
                    </button>
                </form>
                <div className="flex flex-col items-center justify-center space-y-2 mt-4">
                    <a className="text-sm text-blue-700" href="#">
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login