# Next.js Codebase Boilerplate Gen2

Selamat datang di Next.js Codebase Boilerplate Gen2! Boilerplate ini dirancang untuk mempercepat pengembangan proyek Next.js Anda dengan menyediakan fondasi yang solid, terstruktur dengan baik, dan terintegrasi dengan teknologi modern.

## Tujuan Boilerplate

- Menyediakan titik awal yang kuat dan skalabel untuk proyek Next.js.
- Mendorong praktik terbaik dalam pengembangan web (TypeScript, Tailwind CSS, struktur proyek yang jelas).
- Memfasilitasi integrasi yang mudah dengan layanan backend seperti Supabase.
- Menyertakan contoh konfigurasi untuk kualitas kode dan UI/UX modern.

## Fitur Utama

-   **Next.js 15+ (App Router)**: Menggunakan paradigma routing terbaru dari Next.js.
-   **TypeScript**: Untuk pengembangan yang lebih aman dan mudah dikelola.
-   **Tailwind CSS**: Utilitas CSS framework untuk desain yang cepat dan kustom.
-   **Struktur Folder Intuitif**: Pengorganisasian file yang jelas (`src/app`, `src/components`, `src/lib`, dll.).
-   **Kualitas Kode**: Pra-konfigurasi dengan ESLint dan Prettier.
-   **Manajemen Environment Variable**: Melalui file `.env.local` (contoh di `.env.example`).
-   **Integrasi Supabase**: Contoh setup klien Supabase.
-   **Komponen UI & Animasi**: Siap digunakan dengan ShadCN UI, Aceternity UI, Framer Motion, dan Radix UI Icons (perlu diinstal sesuai kebutuhan).
-   **SEO Friendly**: Fondasi untuk optimasi SEO.

## Tech Stack Utama

-   [Next.js](https://nextjs.org/)
-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Supabase](https://supabase.io/) (untuk backend)
-   [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
-   UI Libraries: ShadCN UI, Aceternity UI (konsep), Framer Motion, Radix UI Icons

## Prasyarat

-   Node.js (versi 18.x atau lebih tinggi direkomendasikan)
-   npm / yarn / pnpm / bun

## Memulai

1.  **Clone repository ini (atau gunakan sebagai template):**
    ```bash
    git clone [URL_REPOSITORY_ANDA] nama-proyek-anda
    cd nama-proyek-anda
    ```

2.  **Install dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    # atau
    bun install
    ```

3.  **Konfigurasi Environment Variables:**
    Salin file `.env.example` menjadi `.env.local`:
    ```bash
    cp .env.example .env.local
    ```
    Buka `.env.local` dan isi variabel lingkungan yang diperlukan, terutama untuk koneksi Supabase (`NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY`).

4.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    # atau
    yarn dev
    # atau
    pnpm dev
    # atau
    bun dev
    ```
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

Anda dapat mulai mengedit halaman utama dengan memodifikasi `src/app/page.tsx`. Halaman akan otomatis diperbarui saat Anda mengedit file.

## Struktur Folder (Ringkasan)

```
/
├── public/             # Aset statis
├── src/
│   ├── app/            # Halaman dan layout (App Router)
│   ├── components/     # Komponen React reusable
│   │   ├── ui/         # Komponen UI (misalnya dari ShadCN)
│   │   └── shared/     # Komponen bersama lainnya
│   ├── lib/            # Fungsi utilitas, helper, konfigurasi klien (misal: supabaseClient.ts)
│   ├── styles/         # File CSS global (jika ada, selain Tailwind)
│   └── types/          # Definisi tipe TypeScript kustom
├── .env.local          # Variabel lingkungan lokal (JANGAN di-commit)
├── .env.example        # Contoh variabel lingkungan
├── next.config.ts      # Konfigurasi Next.js
├── tsconfig.json       # Konfigurasi TypeScript
├── package.json        # Dependensi dan skrip proyek
└── README.md           # Informasi proyek ini
```

## Integrasi Supabase

Boilerplate ini menyertakan contoh dasar untuk mengkonfigurasi klien Supabase. Anda perlu:
1.  Membuat proyek di [Supabase](https://supabase.io/).
2.  Mendapatkan URL Proyek dan Kunci Anon Publik Anda dari pengaturan API proyek Supabase.
3.  Menambahkan nilai-nilai ini ke file `.env.local` Anda.
4.  Contoh penggunaan klien Supabase dapat ditemukan atau dibuat di `src/lib/supabaseClient.ts` (atau nama serupa).

## Deployment

### Vercel
Cara termudah untuk mendeploy aplikasi Next.js Anda adalah menggunakan [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dari kreator Next.js.
Pastikan untuk mengkonfigurasi environment variables proyek Anda di pengaturan Vercel.

### Netlify
Anda juga dapat mendeploy ke [Netlify](https://www.netlify.com/).
1.  Hubungkan repositori Git Anda ke Netlify.
2.  Konfigurasikan build command (biasanya `npm run build` atau `next build`).
3.  Atur publish directory (biasanya `.next`).
4.  Tambahkan environment variables Anda di pengaturan situs Netlify.

## Kontribusi

Kontribusi selalu diterima! Silakan buat Pull Request atau buka Issue jika Anda menemukan bug atau memiliki saran fitur.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE.md) (Anda perlu menambahkan file LICENSE.md jika belum ada).
