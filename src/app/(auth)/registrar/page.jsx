"use client"

import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const registerPage = () => {
    const handelRegister = () => {

    }


    return (
        <div className='min-h-[80vh] flex justify-center items-center'>

            {/* form */}
            <div className='p-16 border shadow-sm rounded-lg'>
                 <h1 className="text-center mb-4 text-2xl font-bold">Create Your Account</h1>
                <Form className="flex w-96 flex-col gap-4" onSubmit={handelRegister}>
                    <TextField
                        isRequired

                        name="fullName">
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
                        <Button type="submit">

                            Create Account
                        </Button>

                    </div>
                </Form>
                    <p class="text-center mt-4">Don't have an account? <Link href="/login" class="text-blue-500 underline">Register</Link></p>
            </div>
        </div>
    );
};

export default registerPage;