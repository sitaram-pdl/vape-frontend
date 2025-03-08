'use client';

import { Label } from '@radix-ui/react-dropdown-menu';
import { useRef } from 'react';

import { CareerArticleInput, useCareerArticleMutation } from '@/api/career';
import { successToast, Typography } from '@/components/reusable';
import FileUpload from '@/components/reusable/file-upload';
import { Button } from '@/components/ui/button';
import { Form, Input, Select } from '@/components/ui/form';
import { Spinner } from '@/components/ui/spinner';
import { countries } from '@/config/countries-list';
import { CAArticleSchema } from '@/schema/ca-article.schema';

const CAArticleForm = () => {
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const [careerArticle, { isLoading }] = useCareerArticleMutation();

  const formRef = useRef<HTMLFormElement | null>(null);

  const yearOptions = Array.from({ length: 10 }, (_, i) => ({
    label: `${2015 + i}`,
    value: 2015 + i,
  }));

  const handleSubmit = async (values: CareerArticleInput) => {
    const res = await careerArticle(values);

    if ('data' in res && res.data) {
      successToast('Form submitted successfully');
      formRef.current && formRef.current.reset();
    }
  };

  return (
    <Form
      ref={formRef}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      schema={CAArticleSchema}
    >
      {({ register, formState, setValue }) => (
        <div className="space-y-6">
          <div className="rounded-lg bg-[#F4FAFC] p-6">
            <Typography className="text-xl font-semibold text-primary-blue">
              Personal Information
            </Typography>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Input
                label="First Name"
                required
                placeholder="eg: Sangam"
                {...register('firstName')}
                error={formState.errors.firstName}
              />
              <Input
                label="Middle Name"
                placeholder="eg: Prasad"
                {...register('middleName')}
                error={formState.errors.middleName}
              />
              <Input
                required
                label="Last Name"
                placeholder="eg: Wagle"
                {...register('lastName')}
                error={formState.errors.lastName}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                required
                label="Email Address"
                placeholder="eg: sangam@example.com"
                type="email"
                {...register('email')}
                error={formState.errors.email}
              />
              <Input
                required
                label="Permanent Address"
                placeholder="eg: Kupundole-12, Kathmandu"
                {...register('permanentAddress')}
                error={formState.errors.permanentAddress}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                required
                label="Date of Birth"
                type="date"
                {...register('dateOfBirth')}
                error={formState.errors.dateOfBirth}
              />
              <Select
                label="Gender"
                placeholder="eg: Male"
                options={genderOptions}
                registration={register('gender')}
                error={formState.errors.gender}
              />
              <Input
                label="Phone"
                type="number"
                placeholder="+977 98XXXXXXXX"
                registration={register('phone')}
                error={formState.errors.phone}
              />
              <Select
                label="Nationality"
                placeholder="eg: Nepali"
                options={countries.map((item) => ({
                  label: item,
                  value: item,
                }))}
                error={formState.errors['nationality']}
                registration={register('nationality')}
              />
            </div>
          </div>

          <div className="rounded-lg bg-[#F4FAFC] p-6">
            <Typography className="mb-4 text-xl font-semibold text-primary-blue">
              Academic Qualification
            </Typography>
            {['slc_see', 'plus_two'].map((level) => (
              <div
                key={level}
                className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4"
              >
                <div className="mt-2 flex flex-col ">
                  <Label className="mb-1 text-[10px] text-primary-blue">
                    Level
                  </Label>
                  <Typography
                    variant="small"
                    className="bg-white p-2 font-semibold text-primary-blue"
                  >
                    {level.split('_').join(' ').toLocaleUpperCase()}
                  </Typography>
                </div>
                <Input
                  label="Affiliation"
                  required
                  placeholder="eg: Nepal Model School"
                  registration={register(
                    `academic_qualification.${level}.affiliation`,
                  )}
                  error={
                    formState.errors?.academic_qualification?.[level]
                      ?.affiliation
                  }
                />
                <Select
                  label="Passed Year"
                  required
                  placeholder="eg: 2024"
                  options={yearOptions}
                  registration={register(
                    `academic_qualification.${level}.passed_year`,
                  )}
                  error={
                    formState.errors?.academic_qualification?.[level]
                      ?.passed_year
                  }
                />
                <Input
                  label="Grade/Percentage"
                  placeholder=" eg: 3.8 GPA or 85%"
                  type="text"
                  required
                  registration={register(
                    `academic_qualification.${level}.percentage`,
                  )}
                  error={
                    formState.errors?.academic_qualification?.[level]
                      ?.percentage
                  }
                />
              </div>
            ))}

            {['bachelor', 'masters'].map(
              (level) =>
                level && (
                  <div
                    key={level}
                    className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4"
                  >
                    <div className="mt-2 flex flex-col ">
                      <Label className="mb-1 flex gap-2 text-[10px] text-primary-blue">
                        Level{' '}
                        <Typography variant="caption">(Optional)</Typography>
                      </Label>
                      <Typography
                        variant="small"
                        className="bg-white p-2 font-semibold text-primary-blue"
                      >
                        {level.split('_').join(' ').toLocaleUpperCase()}
                      </Typography>
                    </div>
                    <Input
                      label="Affiliation"
                      placeholder="eg: Tribhuvan University"
                      {...register(
                        `academic_qualification.${level}.affiliation`,
                      )}
                      error={
                        formState.errors?.academic_qualification?.[level]
                          ?.affiliation
                      }
                    />
                    <Select
                      label="Passed Year"
                      placeholder="eg: 2024"
                      options={yearOptions}
                      registration={register(
                        `academic_qualification.${level}.passed_year`,
                      )}
                      error={
                        formState.errors?.academic_qualification?.[level]
                          ?.passed_year
                      }
                    />
                    <Input
                      label="Grade/Percentage"
                      placeholder="eg: 3.9 GPA or 90%"
                      type="text"
                      registration={register(
                        `academic_qualification.${level}.percentage`,
                      )}
                      error={
                        formState.errors?.academic_qualification?.[level]
                          ?.percentage
                      }
                    />
                  </div>
                ),
            )}
          </div>

          <div className="rounded-lg bg-[#F4FAFC] p-6">
            <Typography className="mb-4 text-xl font-semibold text-primary-blue">
              Professional Qualification
            </Typography>
            {['cap_one', 'cap_two'].map((level) => (
              <div
                key={level}
                className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4"
              >
                <div className="mt-2 flex flex-col ">
                  <Label className="mb-1 text-[10px] text-primary-blue">
                    Institution
                  </Label>
                  <Typography
                    variant="small"
                    className="bg-white p-2 font-semibold text-primary-blue"
                  >
                    {level === 'cap_one' ? 'CAP-I' : 'CAP-II'}
                  </Typography>
                </div>
                <Select
                  required
                  label="Passed Year"
                  placeholder="Passed year"
                  options={yearOptions}
                  registration={register(
                    `professional_qualification.${level}.passed_year`,
                  )}
                  error={
                    formState.errors?.professional_qualification?.[level]
                      ?.passed_year
                  }
                />
                <Input
                  required
                  label="Percentage"
                  placeholder="eg: 75%"
                  type="number"
                  registration={register(
                    `professional_qualification.${level}.percentage`,
                  )}
                  error={
                    formState.errors?.professional_qualification?.[level]
                      ?.percentage
                  }
                />
                <Input
                  required
                  label="Attempts"
                  placeholder="eg: First Attempt"
                  type="number"
                  registration={register(
                    `professional_qualification.${level}.attempt`,
                  )}
                  error={
                    formState.errors?.professional_qualification?.[level]
                      ?.attempt
                  }
                />
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-[#F4FAFC] p-6">
            <Typography className="text-xl font-semibold text-primary-blue">
              Upload Resume <span className="text-sm text-red-400">*</span>
            </Typography>
            <FileUpload
              error={formState.errors.resume}
              onChange={(e) => {
                setValue('resume', e);
              }}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">
              {isLoading && <Spinner size="sm" className="text-current" />}
              Submit
            </Button>
          </div>
        </div>
      )}
    </Form>
  );
};

export default CAArticleForm;
