'use client';

import clsx from 'clsx';

export function Header() {
  console.log('Header');
  return (
    <h1
      className={clsx(
        'text-3xl',
        'font-bold',
        'text-blue-500',
        'hover:text-blue-100',
        'hover:bg-blue-500',
        'transition',
        'duration-200',
      )}
      onClick={() => alert(123)}
    >
      Texto do meu Header
    </h1>
  );
}
