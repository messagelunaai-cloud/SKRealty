import React from 'react';

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={
        'block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ' +
        className
      }
      {...props}
    />
  );
}

export default Textarea;