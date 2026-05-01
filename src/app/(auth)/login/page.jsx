"use client"

import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Eye, EyeSlash } from "@gravity-ui/icons";

const loginPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handelLogin = () => {

    }

    return (
        <div className='min-h-[80vh] flex justify-center items-center'>

            {/* form */}
            <div className='p-16 border shadow-sm rounded-lg'>
                <h1 className="text-center mb-4 text-2xl font-bold">Sign in</h1>
                <Form className="flex w-96 flex-col gap-4" onSubmit={handelLogin}>

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
                        <Button type="submit" className='w-full'>

                            Sign in
                        </Button>
                    </div>
                </Form>
                <p className="text-center mt-4">Don't have an account? <Link href="/register" class="text-blue-500 underline">Register</Link></p>
            </div>
        </div>
    );
};

export default loginPage;