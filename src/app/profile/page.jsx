"use client"
import UpdateProfile from '@/components/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const userInfo = authClient.useSession()
    const user = userInfo.data?.user
    return (
        <div className='min-h-screen max-w-96 mx-auto '>
            <Card className='flex items-center'>
                <Avatar className='w-30 h-30 rounded-md'>
                    <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        referrerPolicy='no-referrer' />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <h2 className='text-xl font-semibold'>{user?.name}</h2>
                <p className='text-muted'>{user?.email}</p>
                <UpdateProfile/>
            </Card>
        </div>
    );
};

export default ProfilePage;