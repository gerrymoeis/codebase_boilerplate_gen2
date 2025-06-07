# Deployment Guide

Setelah Anda mengembangkan aplikasi Anda, langkah selanjutnya adalah melakukan deployment agar dapat diakses secara publik. Boilerplate ini dapat di-deploy ke berbagai platform hosting Jamstack. Berikut adalah panduan dasar untuk Vercel dan Netlify.

## 1. Persiapan Umum Sebelum Deployment

*   **Variabel Lingkungan**: Pastikan semua variabel lingkungan yang diperlukan (seperti kunci API Supabase) telah diatur di platform hosting Anda. Jangan pernah melakukan hardcode kunci sensitif langsung di kode Anda. Gunakan variabel lingkungan yang disediakan oleh platform hosting.
*   **Perintah Build**: Perintah build standar untuk proyek Next.js adalah `npm run build` (atau `yarn build` / `pnpm build`).
*   **Direktori Output**: Direktori output build adalah `.next/`.
*   **Versi Node.js**: Pastikan platform hosting Anda menggunakan versi Node.js yang kompatibel dengan proyek Anda (biasanya versi terbaru LTS atau yang sesuai dengan `engines` di `package.json` jika ada).

## 2. Deployment ke Vercel

Vercel adalah platform dari pembuat Next.js dan menawarkan integrasi yang sangat mulus.

1.  **Hubungkan Repositori Git**:
    *   Buat akun di [Vercel](https://vercel.com) dan hubungkan akun Git Anda (GitHub, GitLab, Bitbucket).
    *   Impor proyek dari repositori Git Anda.

2.  **Konfigurasi Proyek**:
    *   Vercel biasanya akan secara otomatis mendeteksi bahwa ini adalah proyek Next.js dan mengkonfigurasi pengaturan build dengan benar.
    *   **Framework Preset**: Pastikan terdeteksi sebagai "Next.js".
    *   **Build Command**: Seharusnya otomatis `next build` atau biarkan default.
    *   **Output Directory**: Seharusnya otomatis `.next`.
    *   **Install Command**: Seharusnya otomatis `npm install` atau `yarn install` atau `pnpm install` tergantung pada lock file Anda.

3.  **Tambahkan Variabel Lingkungan**:
    *   Di dasbor proyek Vercel Anda, navigasi ke "Settings" > "Environment Variables".
    *   Tambahkan semua variabel lingkungan yang diperlukan, misalnya:
        *   `NEXT_PUBLIC_SUPABASE_URL`
        *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
        *   Variabel lain yang Anda gunakan.

4.  **Deploy**:
    *   Klik tombol "Deploy". Vercel akan membangun dan men-deploy aplikasi Anda.
    *   Setiap kali Anda melakukan push ke branch utama (misalnya, `main` atau `master`), Vercel akan secara otomatis men-deploy ulang perubahan tersebut (jika CI/CD diaktifkan).

## 3. Deployment ke Netlify

Netlify juga merupakan platform populer untuk hosting aplikasi Jamstack.

1.  **Hubungkan Repositori Git**:
    *   Buat akun di [Netlify](https://www.netlify.com/) dan hubungkan akun Git Anda.
    *   Pilih "Add new site" > "Import an existing project" dan pilih repositori Anda.

2.  **Konfigurasi Pengaturan Build**:
    *   **Branch to deploy**: Pilih branch utama Anda (misalnya, `main`).
    *   **Build command**: Masukkan `npm run build`.
    *   **Publish directory**: Masukkan `.next/`.

3.  **Tambahkan Variabel Lingkungan**:
    *   Di dasbor situs Netlify Anda, navigasi ke "Site settings" > "Build & deploy" > "Environment".
    *   Tambahkan variabel lingkungan Anda.

4.  **Konfigurasi Next.js Runtime (Penting)**:
    *   Netlify memerlukan adaptor atau plugin runtime Next.js agar fitur-fitur Next.js (seperti SSR, ISR, Image Optimization, Middleware) berfungsi dengan baik.
    *   Cara termudah adalah dengan menginstal `@netlify/plugin-nextjs` sebagai dev dependency di proyek Anda:
        ```bash
        npm install --save-dev @netlify/plugin-nextjs
        # atau
        yarn add --dev @netlify/plugin-nextjs
        # atau
        pnpm add --save-dev @netlify/plugin-nextjs
        ```
    *   Kemudian, buat file `netlify.toml` di root proyek Anda dengan konten berikut:
        ```toml
        [build]
          command = "npm run build"
          publish = ".next"

        [[plugins]]
          package = "@netlify/plugin-nextjs"
        ```
    *   Pastikan file `netlify.toml` ini di-commit ke repositori Anda.

5.  **Deploy**:
    *   Klik "Deploy site". Netlify akan membangun dan men-deploy aplikasi Anda.
    *   Netlify juga mendukung deployment otomatis dari branch Git Anda.

## 4. Tips Tambahan

*   **Domain Kustom**: Kedua platform memungkinkan Anda untuk dengan mudah mengkonfigurasi domain kustom.
*   **Previews**: Vercel dan Netlify menyediakan URL preview untuk setiap pull request atau commit, yang sangat berguna untuk meninjau perubahan sebelum masuk ke produksi.
*   **Functions**: Jika Anda memerlukan fungsi serverless, kedua platform memiliki solusi (Vercel Functions, Netlify Functions) yang terintegrasi dengan baik dengan Next.js API Routes.

Dengan mengikuti panduan ini, Anda seharusnya dapat men-deploy aplikasi Next.js Anda ke platform pilihan Anda.
