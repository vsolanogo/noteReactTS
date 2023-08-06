import * as React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const styles =
  'px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500';

export function Button({
  className,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  const buttonClass = clsx(styles, className);

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
