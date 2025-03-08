import cn from 'classnames';
import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  type?: string;
  shadow?: boolean;
  variant?: 'normal' | 'solid' | 'outline' | 'line';
  dimension?: 'small' | 'medium' | 'big';
}

const variantClasses = {
  normal: 'border h-9 p-2 focus:outline-none border-gray-400',
  solid:
    'p-2 border border-gray-300 rounded focus:bg-gray-100 focus:border-blue-500',
  outline: 'border border-gray-400 focus:border-blue-500',
  line: 'p-1 mt-0 border-0 border-b border-gray-200 focus:ring-0 focus:border-black text-sm',
};

const sizeClasses = {
  small: 'text-sm h-10',
  medium: 'h-12',
  big: 'h-14',
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      name,
      error,
      variant = 'normal',
      dimension = 'medium',
      shadow = false,
      disabled = false,
      type = 'text',
      inputClassName,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="mb-2 block text-xs font-medium leading-none text-gray-800"
          >
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          className={cn(
            'flex w-full pl-5 border border-gray-200 appearance-none items-center transition duration-300 ease-in-out focus:outline-none focus:ring-0',
            shadow && 'focus:shadow',
            variantClasses[variant],
            sizeClasses[dimension],
            disabled && 'cursor-not-allowed bg-gray-100',
            inputClassName,
          )}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          {...rest}
        />
        {error && (
          <p className="my-2 text-xs font-semibold text-red-500">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
