import { type Middleware, isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import { errorToast } from '@/components/reusable';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (
      // @ts-expect-error error msg
      action.payload.status === 401
    ) {
      toast.error('Session expired, please login again');
      localStorage.clear();
      if (window !== undefined) window.location.reload();
    }

    // @ts-expect-error error msg
    if (action.payload.data) {
      // @ts-expect-error error msg
      const message = action.payload?.data?.message;
      if (
        message !==
        'No reports were found, please create daily report to see the summary.'
      ) {
        // @ts-expect-error error msg
        if (action.payload.status === 409) {
          toast(message);
        } else {
          errorToast(message ?? 'Something went wrong');
        }
      }
    } else {
      errorToast('Something went wrong');
    }
  }

  return next(action);
};
