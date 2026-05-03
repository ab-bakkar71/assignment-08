import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import React from 'react';
import { BiEdit, BiUser } from 'react-icons/bi';

const UpdateProfile = () => {
    const onsubmit = async (e) => {
        e.preventDefault();
        const updateProfile = new FormData(e.currentTarget);
        const userData = Object.fromEntries(updateProfile.entries());

        await authClient.updateUser({
            image: userData.image,
            name: userData.name
        })

    }
    return (
        <Modal>
            <Button variant="secondary"><BiEdit /> Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Your Profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onsubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>Image</Label>
                                        <Input placeholder="Image Url" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button type='submit' slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateProfile;