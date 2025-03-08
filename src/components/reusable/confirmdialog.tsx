import { ReactNode } from 'react';
import Swal from 'sweetalert2';

import { cn } from '@/lib/utils';

interface ConfirmDialogProps {
  title?: string;
  text?: string;
  onConfirm?: () => void;
  children: ReactNode;
  className?: string;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  text,
  onConfirm,
  children,
  className,
}) => {
  const handleClick = async () => {
    const result = await Swal.fire({
      title: title || 'Are you sure?',
      text: text || "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm!',
    });

    if (result.isConfirmed) {
      // await Swal.fire({
      //   title: 'Confirmed!',
      //   text: 'Your action has been completed.',
      //   icon: 'success',
      // });
      onConfirm && onConfirm();
    }
  };

  return (
    <button className={cn('w-full', className)} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ConfirmDialog;
