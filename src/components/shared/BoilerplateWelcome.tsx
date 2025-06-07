// src/components/shared/BoilerplateWelcome.tsx
import React from 'react';

type BoilerplateWelcomeProps = {
  projectName?: string;
};

const BoilerplateWelcome: React.FC<BoilerplateWelcomeProps> = ({
  projectName = 'Next.js Codebase Boilerplate Gen2',
}) => {
  return (
    <div className='text-center'>
      <h1 className='mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl'>
        Selamat Datang di <span className='text-purple-600 dark:text-purple-400'>{projectName}</span>!
      </h1>
      <p className='mb-8 text-lg text-gray-600 dark:text-gray-300 sm:text-xl'>
        Boilerplate ini siap membantu Anda memulai proyek Next.js berikutnya dengan cepat.
      </p>
      <p className='text-md text-gray-500 dark:text-gray-400'>
        Silakan edit <code className='rounded bg-gray-100 px-1 py-0.5 font-mono text-sm dark:bg-gray-800'>src/app/page.tsx</code> untuk memulai.
        Lihat <code className='rounded bg-gray-100 px-1 py-0.5 font-mono text-sm dark:bg-gray-800'>README.md</code> untuk panduan lebih lanjut.
      </p>
    </div>
  );
};

export default BoilerplateWelcome;
