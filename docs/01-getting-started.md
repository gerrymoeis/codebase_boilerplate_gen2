# Getting Started with Your Next.js Boilerplate

Selamat datang di Next.js Codebase Boilerplate Gen2! Boilerplate ini dirancang untuk membantu Anda memulai proyek Next.js baru dengan cepat, dilengkapi dengan berbagai alat dan konfigurasi standar industri.

## 1. Prasyarat

Pastikan Anda memiliki Node.js (versi 18.x atau lebih tinggi direkomendasikan) dan npm/yarn/pnpm terinstal di sistem Anda.

## 2. Instalasi

1.  **Kloning atau Unduh Boilerplate**:
    Jika ini adalah repositori Git, kloning:
    ```bash
    git clone <URL_REPOSITORI_ANDA> nama-proyek-baru
    cd nama-proyek-baru
    ```
    Jika Anda mengunduh sebagai ZIP, ekstrak dan navigasi ke direktori tersebut.

2.  **Instal Dependensi**:
    Buka terminal di direktori root proyek dan jalankan:
    ```bash
    npm install
    ```
    atau jika menggunakan Yarn:
    ```bash
    yarn install
    ```
    atau jika menggunakan PNPM:
    ```bash
    pnpm install
    ```

## 3. Menjalankan Server Pengembangan

Untuk memulai server pengembangan lokal:
```bash
npm run dev
```
Ini akan menjalankan aplikasi Anda (biasanya di `http://localhost:3000`). Server akan otomatis me-reload ketika Anda membuat perubahan pada file.

## 4. Skrip Penting

Proyek ini dilengkapi dengan beberapa skrip npm yang berguna:

*   `npm run dev`: Memulai server pengembangan Next.js dengan Turbopack.
*   `npm run build`: Membuat build produksi aplikasi Anda di direktori `.next/`.
*   `npm run start`: Memulai server produksi setelah Anda menjalankan `build`.
*   `npm run lint`: Menjalankan ESLint untuk memeriksa masalah gaya kode dan potensi error.
*   `npm run format`: Memformat semua file yang didukung menggunakan Prettier.

## 5. Struktur Folder Utama

Berikut adalah gambaran singkat tentang struktur folder utama:

*   `public/`: Berisi aset statis seperti gambar, font (jika tidak di-host secara eksternal), dan file lain yang akan disajikan apa adanya.
*   `src/`: Direktori utama untuk kode sumber aplikasi Anda.
    *   `app/`: Inti dari App Router Next.js. Berisi layout, halaman, dan komponen server/klien.
        *   `layout.tsx`: Layout root aplikasi.
        *   `page.tsx`: Halaman utama aplikasi.
        *   `globals.css`: File CSS global.
    *   `components/`: Direktori untuk komponen React Anda.
        *   `shared/`: Komponen yang dapat digunakan kembali di berbagai bagian aplikasi.
        *   `ui/`: Komponen UI dasar (misalnya, tombol, kartu) yang mungkin Anda buat atau impor dari pustaka UI.
    *   `lib/`: Berisi fungsi utilitas, helper, atau konfigurasi klien (misalnya, `supabaseClient.ts`).
    *   `styles/`: Untuk file gaya tambahan jika diperlukan (meskipun Tailwind CSS adalah fokus utama).
    *   `types/`: Definisi tipe TypeScript kustom.
*   `docs/`: (Direktori ini!) Berisi dokumentasi tambahan untuk boilerplate.
*   `mcp_config/`: Konfigurasi untuk integrasi MCP (Model Context Protocol), jika Anda memutuskan untuk menggunakannya.

## 6. File Konfigurasi Kunci

*   `.env.example`: Contoh file variabel lingkungan. Salin ke `.env.local` dan isi dengan nilai Anda.
*   `.eslintrc.json`: Konfigurasi ESLint.
*   `.gitignore`: File dan folder yang diabaikan oleh Git.
*   `.prettierrc.json`: Konfigurasi Prettier.
*   `next.config.ts`: Konfigurasi Next.js.
*   `package.json`: Mendefinisikan metadata proyek, dependensi, dan skrip.
*   `tailwind.config.ts`: Konfigurasi Tailwind CSS.
*   `tsconfig.json`: Konfigurasi TypeScript.

Dengan panduan ini, Anda seharusnya dapat memulai pengembangan dengan boilerplate ini. Lihat dokumen lain di direktori `docs/` untuk panduan lebih lanjut tentang alur kerja pengembangan dan deployment.
