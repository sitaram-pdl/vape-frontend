'use client';

import { ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import {
  careerApi,
  useDeleteCareerInternMutation,
  useGetCareerInternByIdQuery,
  useUpdateCareerInternStatusMutation,
} from '@/api/career';
import { successToast, Typography } from '@/components/reusable';
import ConfirmDialog from '@/components/reusable/confirmdialog';
import { Dropdown } from '@/components/reusable/dropdown';
import { Button } from '@/components/ui/button';
import CareerInternSingle from '@/features/career/career-intern-single/career-intern-single';

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useGetCareerInternByIdQuery({ id: `${id}` });
  const [deleteCareerIntern] = useDeleteCareerInternMutation();

  const [updateCareerInternStatus] = useUpdateCareerInternStatusMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteCareerIntern({ id });
    if ('data' in res && res.data) {
      dispatch(careerApi.util.invalidateTags(['careerintern']));
      router.push('/auth/career/intern');
      successToast(res.data.message);
    }
  };

  const handleUpdate = async (value: string) => {
    const res = await updateCareerInternStatus({ status: value, id: `${id}` });

    if ('data' in res && res.data) {
      successToast(res.data?.message);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-5 border-b border-black/10 p-3">
        <button
          className="flex items-center gap-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="text-primary-blue" />
          <Typography variant="p" className="text-primary-blue">
            Back
          </Typography>
        </button>
        <div className="flex gap-4">
          <Dropdown
            items={[
              {
                label: 'Pending',
                checked: data?.data.status === 'pending',
                onClick: () => handleUpdate('pending'),
              },
              {
                label: 'Reviewed',
                checked: data?.data.status === 'reviewed',
                onClick: () => handleUpdate('reviewed'),
              },
            ]}
          >
            <Button className="rounded-full">Update Status</Button>
          </Dropdown>

          <div className="flex h-9 items-center rounded-full bg-red-400 px-4 py-2 font-medium hover:bg-red-300">
            <ConfirmDialog onConfirm={() => handleDelete(id)}>
              <Typography variant="small">Delete</Typography>
            </ConfirmDialog>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-3">
        <CareerInternSingle articledata={data?.data} />
      </div>
    </div>
  );
};

export default Page;
