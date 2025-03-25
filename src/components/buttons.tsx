import React from 'react';
import classNames from 'classnames';
import { FaCircleNotch } from 'react-icons/fa';
export const buttonSizes = [
    'small',
    'medium',
    'large',
] as const
export type buttonSize = (typeof buttonSizes)[number]

export const variations = [
    'primary',
    'secondary',
    'teretary',
    'alert',
] as const
export type variation = (typeof variations)[number]

type ButtonProps = {
  children: React.ReactNode;
  size?: buttonSize;
  buttonType?: variation;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRounded?: boolean;
  onClick?: () => void;
  className?: string;
};

export const Button = ({
  children,
  size = 'medium',
  buttonType = 'primary',
  isDisabled = false,
  isLoading = false,
  isRounded = true,
  onClick,
  className,
}: ButtonProps) => {
  const sizeClasses = {
    small: 'text-sm px-4 py-1.5',
    medium: 'text-base px-5 py-2',
    large: 'text-lg px-6 py-2.5',
  };

  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-colors duration-200 cursor-pointer';

  const buttonTypeClasses = {
    primary: 'bg-[#19181b] text-white hover:bg-[#2a292d]',
    secondary: 'bg-transparent text-white border-2 border-white/50 hover:bg-white/5',
    alert: 'bg-red-600 text-white hover:bg-red-700',
    teretary: 'bg-white text-black hover:bg-gray-100',
  };

  const classes = classNames(
    baseClasses,
    sizeClasses[size],
    buttonTypeClasses[buttonType],
    {
      'rounded-full': !isRounded,
      'rounded-md': isRounded,
      'opacity-50 cursor-not-allowed': isDisabled || isLoading,
    },
    className
  );

  return (
    <button className={classes} onClick={onClick} disabled={isDisabled || isLoading}>
      {isLoading ? (
        <FaCircleNotch className="animate-spin text-white text-lg" />
      ) : (
        children
      )}
    </button>
  );
};