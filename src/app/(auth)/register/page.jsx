"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const registerPage = () => {

    const router = useRouter()

    const handelRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());


        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.image,
        })

        if (!error) {
            router.push("/login")
        }

        if (error) {
            toast.error(error.message)
        }
        if (data) {
            toast.success('Registration successful ✅')
        }
    }

    const handelGoogleRegister = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
    }



    return (
        <div className='min-h-[80vh] flex justify-center items-center'>

            {/* form */}
            <div className='p-16 border shadow-sm rounded-lg'>
                <h1 className="text-center mb-4 text-2xl font-bold">Create Your Account</h1>
                <Form className="flex w-96 flex-col gap-4" onSubmit={handelRegister}>
                    <TextField
                        isRequired

                        name="name">
                        <Label>Full Name</Label>
                        <Input placeholder="Enter Your Name" />

                    </TextField>
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
                    <TextField isRequired name="image" type="text">
                        <Label>Image URL</Label>
                        <Input placeholder="Image URL" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit" className='w-full bg-[#198c19] hover:bg-[#21b121]'>
                            Create Account
                        </Button>
                    </div>
                    <Button onClick={handelGoogleRegister} className="w-full" variant="tertiary">
                        <Icon icon="devicon:google" />
                        Sign in with Google
                    </Button>
                </Form>
                <p className="text-center mt-4">Already have an account? <Link href="/login" className="text-blue-500 underline">Login</Link></p>
            </div>
        </div>
    );
};

export default registerPage;