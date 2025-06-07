// src/app/page.tsx
import BoilerplateWelcome from '@/components/shared/BoilerplateWelcome'; // Menggunakan path alias @/

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-8 sm:p-24'>
      <BoilerplateWelcome />
      {/* Anda bisa menambahkan komponen atau konten lain di sini */}
    </main>
  );
}

