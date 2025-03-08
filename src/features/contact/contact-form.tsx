'use client';
import { useRef } from 'react';
import { z } from 'zod';

import { useContactEmailMutation } from '@/api/contact';
import { successToast, Typography } from '@/components/reusable';
import { Button } from '@/components/ui/button';
import { Form, Input, Select, Textarea } from '@/components/ui/form';
import { Spinner } from '@/components/ui/spinner';
import { countries } from '@/config/countries-list';
import { contactFormSchema } from '@/schema/contact.schema';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  type ContactInput = z.infer<typeof contactFormSchema>;

  const [contactEmail, { isLoading }] = useContactEmailMutation();

  const handleSubmit = async (data: ContactInput) => {
    const response = await contactEmail(data);
    if ('data' in response) {
      successToast('Main sent successFully');
      formRef.current && formRef.current.reset();
    }
  };

  return (
    <Form
      ref={formRef}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      schema={contactFormSchema}
    >
      {({ register, formState }) => (
        <>
          <div className="mb-6 flex flex-col gap-3 bg-[#F4FAFC] p-4">
            <Typography className="mb-4 font-semibold" variant="p">
              Tell us about you
            </Typography>
            <Input
              label="Name"
              placeholder="Rajeev Baniya"
              error={formState.errors['name']}
              registration={register('name')}
            />
            <Input
              label="Company Name"
              placeholder="S.R. Pandey & Co."
              error={formState.errors['companyName']}
              registration={register('companyName')}
            />
            <Input
              label="Email"
              placeholder="sangam@example.com"
              type="email"
              error={formState.errors['email']}
              registration={register('email')}
            />
            <Input
              label="Current Address"
              placeholder="Kupundole-12, Kathmandu"
              error={formState.errors['current_address']}
              registration={register('current_address')}
            />
            <Select
              options={countries.map((item) => ({ label: item, value: item }))}
              label="Nationality"
              placeholder="Select a Nationality"
              error={formState.errors['nationality']}
              registration={register('nationality')}
            />
          </div>
          <div className="mb-6 bg-[#F4FAFC] p-4">
            <Typography className="mb-4 font-semibold" variant="p">
              How can we help you?
            </Typography>

            <div className="flex flex-col gap-3">
              <Input
                label="Subject"
                placeholder="eg: Inquiry about Tax Consultancy Services"
                error={formState.errors['subject']}
                registration={register('subject')}
              />

              <Textarea
                label="Message"
                rows={3}
                placeholder="eg: I am looking for assistance with filing my income tax return in Nepal. Please provide details on your services and pricing."
                error={formState.errors['message']}
                registration={register('message')}
              />
            </div>
          </div>
          <Button className="float-right">
            {isLoading && <Spinner size="sm" className="text-current" />}
            Submit
          </Button>
        </>
      )}
    </Form>
  );
};

export default ContactForm;
