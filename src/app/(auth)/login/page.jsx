"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { toast } from 'react-toastify';



const loginPage = () => {


    const handelLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: "/"
        })

        if (error) {
            toast.error(error.message)
        }
        if (data) {
            toast.success("Login successful!")
        }


    }

    const handelGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
    }

    return (
        <div className='min-h-[80vh] flex justify-center items-center p-4'> {/* Added p-4 for mobile breathing room */}

            {/* form container */}
            <div className='w-full max-w-md p-6 sm:p-10 md:p-16 border shadow-sm rounded-lg'>
                {/* Changed w-96 to w-full max-w-md and used responsive padding */}

                <h1 className="text-center mb-4 text-2xl font-bold">Sign in</h1>

                <Form className="flex flex-col gap-4" onSubmit={handelLogin}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                            if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex flex-col gap-2 mt-2">
                        <Button type="submit" className='w-full bg-[#198c19] hover:bg-[#21b121] py-2'>
                            Sign in
                        </Button>

                        {/* google sign in btn */}
                        <Button onClick={handelGoogleLogin} className="w-full" variant="tertiary">
                            <Icon icon="devicon:google" />
                            Sign in with Google
                        </Button>
                    </div>
                </Form>

                <p className="text-center mt-6 text-sm">
                    Don't have an account? <Link href="/register" className="text-blue-500 underline">Register</Link>
                </p>
            </div>
        </div>

    );
};

export default loginPage;