import { Button, Description, Input, Label, Surface, TextArea, TextField } from '@heroui/react';


const FooterInput = () => {
    return (
        <div>
           <Surface className="flex w-full min-w-[340px] flex-col gap-4 rounded-3xl p-6">
      <TextField name="name" variant="secondary">
        <Label>Your name</Label>
        <Input className="w-full" placeholder="John" />
        <Description>We'll never share this with anyone else</Description>
      </TextField>
      <TextField name="email" type="email" variant="secondary">
        <Label>Email</Label>
        <Input className="w-full" placeholder="john@example.com" />
      </TextField>
      <TextField name="bio" variant="secondary">
        <Label>Bio</Label>
        <TextArea className="w-full" placeholder="Tell us about yourself..." rows={4} />
        <Description>Minimum 4 rows</Description>
      </TextField>
    </Surface>
    <div className="flex gap-2 mt-4">
        <Button className='bg-[#198c19]' type="submit">
          Submit
        </Button>
        <Button type="reset" variant="secondary" className='text-[#198c19]'>
          Reset
        </Button>
      </div>

        </div>
    );
};

export default FooterInput;