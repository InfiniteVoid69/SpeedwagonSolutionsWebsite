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

  const baseClasses = 'flex items-center justify-center font-semibold transition-colors duration-200';

  const buttonTypeClasses = {
    primary: 'bg-[#197dff] text-text-secondary hover:bg-[#197dff]/85',
    secondary: 'bg-transparent text-text-primary border-2 border-secondary/50 hover:bg-secondary/50',
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
      'opacity-50': isDisabled || isLoading,
      'cursor-not-allowed': isDisabled,
      'cursor-progress': isLoading,
      'cursor-pointer': !isDisabled && !isLoading,
    },
    className
  );

  return (
    <button className={classes} onClick={onClick} disabled={isLoading || isDisabled}>
      {isLoading ? (
        <FaCircleNotch className="animate-spin text-white text-lg" />
      ) : (
        children
      )}
    </button>
  );
};