import React from 'react'

const Login = () => {
    return (

        <div class="min-h-screen bg-blue-50 flex justify-center items-center p-4">
            <div class="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-2xl font-bold text-blue-800">Welcome to My Blogs</h2>
                </div>
                <p class="text-sm text-blue-800 mb-6">Sign in to continue to your account.</p>
                <div class="space-y-4 mb-4">
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white w-full">
                        Continue with Google
                    </button>
                </div>
                <div class="flex items-center justify-between mb-4">
                    <hr class="w-full" />
                    <span class="px-2 text-sm text-blue-800">or</span>
                    <hr class="w-full" />
                </div>
                <form class="space-y-4">
                    <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Email address"
                        type="email"
                    />
                    <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Password"
                        type="password"
                    />
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-green-500 text-white w-full">
                        Sign In
                    </button>
                </form>
                <div class="flex flex-col items-center justify-center space-y-2 mt-4">
                    <a class="text-sm text-blue-700" href="#">
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login