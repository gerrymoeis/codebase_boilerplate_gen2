# Project Functional Requirements: Codebase Boilerplate Gen2

## 1. Pendahuluan

Proyek Codebase Boilerplate Gen2 bertujuan untuk menyediakan fondasi kode (boilerplate) yang lengkap, robust, dan scalable untuk mempercepat proses kickstart pengembangan proyek-proyek web ambisius. Boilerplate ini akan difokuskan pada Next.js sebagai framework utama dan dirancang untuk mudah diintegrasikan dengan teknologi AI modern, termasuk AI Code Editor dan Model Context Protocol (MCP).

## 2. Tujuan Utama

*   Menyediakan boilerplate Next.js yang siap pakai dengan konfigurasi terbaik.
*   Mempercepat waktu pengembangan awal proyek (time-to-market).
*   Mendorong penggunaan praktik terbaik dalam pengembangan web.
*   Memastikan skalabilitas dan kemudahan pemeliharaan kode.
*   Memfasilitasi integrasi dengan layanan backend (seperti Supabase) dan alat AI.
*   Menyediakan dasar yang kuat untuk pengembangan fitur-fitur kompleks.

## 3. Core Technology Stack

*   **Framework**: Next.js (versi terbaru, dengan App Router)
*   **Bahasa Pemrograman**: TypeScript
*   **UI Library**: React
*   **Styling**: Tailwind CSS (dengan PostCSS)
*   **Package Manager**: npm / yarn / pnpm (akan ditentukan, saat ini npm)

## 4. Fitur Fungsional Utama

### 4.1. Struktur Proyek dan Konfigurasi Dasar
*   **Struktur Folder yang Jelas**: Mengikuti praktik terbaik Next.js dan mudah dipahami.
    *   `src/app` untuk routing dan layout utama.
    *   `src/components` untuk komponen UI reusable.
    *   `src/lib` untuk utilitas dan fungsi helper.
    *   `src/styles` untuk global styles dan konfigurasi Tailwind.
    *   `src/services` atau `src/api` untuk logika interaksi dengan API eksternal atau backend.
*   **Konfigurasi TypeScript**: Pengaturan `tsconfig.json` yang optimal dan ketat.
*   **Konfigurasi Next.js**: Pengaturan `next.config.js` yang esensial (misalnya, path aliases, environment variables).
*   **Manajemen Environment Variables**: Penggunaan `.env.local`, `.env.production`, dll.

### 4.2. UI dan UX
*   **Integrasi Tailwind CSS**: Konfigurasi lengkap dengan dukungan untuk theming, dark mode, dan responsive design.
*   **Contoh Komponen UI Dasar**:
    *   Implementasi beberapa komponen dasar menggunakan UI Library pilihan (seperti ShadCN UI, Aceternity UI, Artifact UI, React Bits UI) untuk menunjukkan cara integrasi.
    *   Contoh layout dasar (misalnya, header, footer, sidebar).
*   **Animasi**: Dukungan untuk animasi dasar menggunakan `framer-motion` atau utilitas Tailwind CSS.

### 4.3. Routing dan Navigasi
*   **Next.js App Router**: Implementasi routing berbasis direktori.
*   **Contoh Halaman**: Beberapa halaman contoh (misalnya, Home, About, Contact, Dashboard).
*   **Navigasi**: Komponen navigasi dasar (Navbar, Breadcrumbs jika relevan).
*   **Protected Routes**: Contoh implementasi rute yang memerlukan autentikasi.

### 4.4. State Management
*   **React Context API / Zustand / Redux Toolkit**: Menyediakan contoh atau rekomendasi untuk state management global jika diperlukan, dengan preferensi pada solusi yang lebih ringan dan modern.

### 4.5. Integrasi Backend dan API
*   **API Routes Next.js**: Contoh pembuatan endpoint API sederhana.
*   **Integrasi Supabase**:
    *   Konfigurasi koneksi ke Supabase.
    *   Contoh CRUD operations menggunakan Supabase client.
    *   Integrasi Supabase Auth untuk autentikasi pengguna (login, register, logout, social login).
*   **Fetching Data**: Contoh penggunaan `fetch` atau library seperti SWR/React Query untuk data fetching di sisi client dan server.

### 4.6. SEO (Search Engine Optimization)
*   **Meta Tags Dinamis**: Kemampuan untuk mengatur meta title, description, keywords per halaman.
*   **Open Graph & Twitter Cards**: Implementasi dasar untuk social sharing.
*   **`robots.txt` dan `sitemap.xml`**: Generasi otomatis atau template dasar.
*   **Structured Data (JSON-LD)**: Contoh implementasi dasar untuk meningkatkan visibilitas di search engine.

### 4.7. Kualitas Kode dan Developer Experience
*   **Linting dan Formatting**: Konfigurasi ESLint dan Prettier untuk menjaga konsistensi kode.
*   **Skrip NPM yang Jelas**: Skrip untuk development, build, start, lint, test.
*   **Husky & lint-staged (Opsional)**: Untuk menjalankan linter dan formatter sebelum commit.

### 4.8. Integrasi AI dan MCP
*   **Desain untuk AI Code Editor**: Struktur kode yang mudah dianalisis dan dimodifikasi oleh AI code editor.
*   **Persiapan untuk MCP**:
    *   Menyediakan direktori `mcp_config` dengan contoh konfigurasi.
    *   Dokumentasi cara mengintegrasikan dan menggunakan MCP server (seperti Task Master, Context7, Supabase MCP).
*   **Contoh Penggunaan MCP (jika memungkinkan)**: Skenario sederhana yang menunjukkan bagaimana MCP dapat dimanfaatkan dalam proyek.

### 4.9. Testing
*   **Framework Testing**: Konfigurasi dasar untuk Jest dan React Testing Library.
*   **Contoh Unit Test**: Beberapa contoh unit test untuk komponen dan utilitas.
*   **Contoh Integration Test (Opsional)**.

### 4.10. Dokumentasi
*   **README.md yang Komprehensif**: Penjelasan proyek, cara setup, struktur folder, dan cara penggunaan boilerplate.
*   **Panduan Kontribusi (CONTRIBUTING.md)**.
*   **Komentar Kode**: Kode yang terdokumentasi dengan baik.

### 4.11. Deployment
*   **Konfigurasi Netlify**: Siap untuk deployment ke Netlify.
*   **File `netlify.toml` (jika diperlukan)**: Untuk konfigurasi build dan redirect.

## 5. Non-Functional Requirements

*   **Performa**: Dioptimalkan untuk kecepatan loading (menggunakan fitur Next.js seperti Image Optimization, Code Splitting).
*   **Keamanan**: Mengikuti praktik keamanan web standar (misalnya, proteksi XSS, CSRF jika relevan).
*   **Skalabilitas**: Arsitektur yang memungkinkan penambahan fitur dan pengguna tanpa masalah besar.
*   **Maintainability**: Kode yang bersih, modular, dan mudah dipahami.
*   **Developer Experience**: Proses setup yang mudah, alat bantu yang efisien, dan dokumentasi yang jelas.

## 6. Target Pengguna

*   Developer individu yang ingin memulai proyek Next.js dengan cepat.
*   Tim kecil hingga menengah yang membutuhkan fondasi yang solid.
*   Proyek yang memerlukan integrasi dengan AI dan Supabase.

## 7. Kriteria Sukses

*   Boilerplate berhasil digunakan untuk memulai minimal 3 proyek internal/eksternal.
*   Mendapatkan feedback positif dari pengguna terkait kemudahan penggunaan dan kelengkapan fitur.
*   Proses setup dan konfigurasi awal dapat diselesaikan dalam waktu kurang dari 30 menit.
