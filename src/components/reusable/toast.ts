import { toast, Toaster } from '@/components/ui';

export const successToast = (message: string) => {
  toast.success(message, {
    duration: 1500,
    position: 'top-right',
  });
};

export const errorToast = (message: string) => {
  toast.error(message, {
    duration: 1500,
    position: 'top-right',
  });
};

export { Toaster };
