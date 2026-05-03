import { Button, Description, Input, Label, Surface, TextArea, TextField } from '@heroui/react';


const FooterInput = () => {
  return (
    <div>
      <Surface className="flex w-full min-w-[340px] flex-col gap-4 rounded-3xl p-6">
        <h3 className='text-center font-semibold'>Contact Us</h3>
        <TextField name="name" variant="secondary">
          <Label>Your name</Label>
          <Input className="w-full" placeholder="Your Name" />
          <Description>We'll never share this with anyone else</Description>
        </TextField>
        <TextField name="email" type="email" variant="secondary">
          <Label>Email</Label>
          <Input className="w-full" placeholder="Your Email" />
        </TextField>
        <TextField name="bio" variant="secondary">
          <Label>Massage</Label>
          <TextArea className="w-full" placeholder="Type Your Massage..." rows={4} />
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