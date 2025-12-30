import React from 'react';

export function Button({ className = '', size = 'md', children, ...props }) {
  const sizeClasses =
    size === 'lg'
      ? 'px-6 py-3 text-base'
      : size === 'sm'
      ? 'px-3 py-1.5 text-sm'
      : 'px-4 py-2 text-sm';

  return (
    <button
      className={
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none ' +
        sizeClasses +
        ' ' +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;