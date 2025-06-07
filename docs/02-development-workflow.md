# Development Workflow and Tooling

Dokumen ini memberikan saran tentang alur kerja pengembangan yang efektif menggunakan boilerplate ini, termasuk pemanfaatan MCP Server dan pustaka UI.

## 1. Alur Kerja Pengembangan Sistematis

Meskipun Task Master MCP tidak lagi menjadi fokus utama, prinsip perencanaan sistematis tetap penting. Pertimbangkan untuk:

1.  **Definisikan Fitur**: Pecah proyek Anda menjadi fitur-fitur atau modul-modul yang lebih kecil.
2.  **Rancang Model Data**: Jika menggunakan database seperti Supabase, rancang skema tabel Anda terlebih dahulu.
3.  **Desain UI/UX**: Buat sketsa atau mockup antarmuka pengguna sebelum mulai coding.
4.  **Implementasi**: Kembangkan fitur per fitur, dimulai dari logika backend (jika ada) kemudian frontend.
5.  **Uji**: Lakukan pengujian unit, integrasi, dan end-to-end secara berkala.
6.  **Iterasi**: Dapatkan feedback dan lakukan perbaikan.

## 2. Pemanfaatan MCP Server (Opsional)

Boilerplate ini menyertakan direktori `mcp_config/` dengan file `mcp_config_boilerplate.json`. Jika Anda bekerja dengan AI Assistant yang mendukung MCP (Model Context Protocol), file ini dapat membantu AI memahami struktur proyek dan sumber daya yang tersedia.

### a. Supabase Integration

*   **Konfigurasi Klien**: File `src/lib/supabaseClient.ts` menyediakan contoh pengaturan klien Supabase.
*   **Variabel Lingkungan**: Pastikan Anda telah menyalin `.env.example` ke `.env.local` dan mengisi `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
*   **Penggunaan**: Anda dapat mengimpor `supabase` dari `supabaseClient.ts` untuk berinteraksi dengan database dan layanan Supabase lainnya.
    ```typescript
    // Contoh di dalam komponen atau halaman
    import { supabase } from '@/lib/supabaseClient';

    async function fetchData() {
      const { data, error } = await supabase.from('nama_tabel').select('*');
      if (error) console.error('Error fetching data:', error);
      else console.log('Data:', data);
    }
    ```
*   **MCP Server `@resources:supabase:`**: Jika AI Assistant Anda mendukungnya, ini dapat mempermudah operasi database, migrasi, dan pengelolaan Supabase langsung dari lingkungan pengembangan AI.

### b. MCP Server untuk UI (Magic UI & Vibe)

*   **`@resources:@magicuidesign/mcp:`**: Menyediakan akses ke berbagai komponen UI siap pakai dari [Magic UI](https://magicui.design/). Ini bisa sangat berguna untuk menambahkan elemen visual yang menarik dengan cepat.
*   **`@resources:vibe:`**: Jika Anda bekerja dalam ekosistem yang menggunakan Vibe Design System, MCP server ini dapat membantu mengambil metadata dan boilerplate komponen Vibe.

## 3. Pengembangan Antarmuka Pengguna (UI)

Merancang UI yang modern dan efektif adalah kunci. Boilerplate ini menggunakan Tailwind CSS, yang memberikan fleksibilitas tinggi.

### a. Rekomendasi Pustaka Komponen UI

Berikut adalah beberapa pustaka komponen UI berbasis React dan Tailwind CSS yang populer dan sangat direkomendasikan untuk mempercepat pengembangan UI Anda:

1.  **ShadCN UI**
    *   **Website**: [ui.shadcn.com](https://ui.shadcn.com/)
    *   **Deskripsi**: Bukan pustaka komponen tradisional, melainkan kumpulan komponen yang dapat Anda salin-tempel (copy-paste) ke proyek Anda. Komponen-komponen ini indah, dapat diakses, dan dapat disesuaikan sepenuhnya.
    *   **Instalasi**: Biasanya per komponen menggunakan CLI mereka. Contoh: `npx shadcn-ui@latest add button`.
    *   **Kelebihan**: Anda memiliki kode komponen sepenuhnya, mudah disesuaikan, tidak menambah banyak dependensi.

2.  **Aceternity UI**
    *   **Website**: [ui.aceternity.com](https://ui.aceternity.com/)
    *   **Deskripsi**: Koleksi komponen UI modern yang dibuat dengan Next.js, Tailwind CSS, dan Framer Motion. Fokus pada animasi dan interaksi yang halus.
    *   **Instalasi**: Juga seringkali per komponen melalui CLI atau copy-paste kode.
    *   **Kelebihan**: Komponen yang sangat menarik secara visual, cocok untuk landing page dan aplikasi modern.

3.  **Artifact UI**
    *   **Website**: [artifactui.in](https://artifactui.in/)
    *   **Deskripsi**: Pustaka komponen UI yang dirancang untuk kesederhanaan dan kemudahan penggunaan, dibangun dengan Tailwind CSS.
    *   **Instalasi**: Melalui npm/yarn dan impor komponen.
    *   **Kelebihan**: Desain bersih, mudah diintegrasikan.

4.  **React Bits UI**
    *   **Website**: [www.reactbits.dev](https://www.reactbits.dev/)
    *   **Deskripsi**: Kumpulan komponen dan hook React, termasuk animasi teks, efek hover, dan utilitas lainnya.
    *   **Instalasi**: Biasanya copy-paste kode atau instalasi hook/komponen individual jika tersedia sebagai paket.
    *   **Kelebihan**: Menyediakan banyak efek kecil dan interaksi yang dapat meningkatkan tampilan UI.

### b. Tips Memilih dan Mengintegrasikan Pustaka UI

*   **Kebutuhan Proyek**: Pilih pustaka yang komponennya paling sesuai dengan kebutuhan desain dan fungsionalitas proyek Anda.
*   **Kustomisasi**: Pertimbangkan seberapa mudah komponen dapat disesuaikan dengan tema dan gaya proyek Anda. ShadCN UI unggul dalam hal ini.
*   **Ukuran Bundle**: Perhatikan dampak pustaka terhadap ukuran bundle akhir aplikasi Anda, meskipun dengan Tailwind CSS, tree-shaking biasanya cukup efektif.
*   **Konsistensi**: Usahakan untuk konsisten dengan satu atau dua pustaka utama untuk menjaga keseragaman desain.
*   **Struktur Komponen**: Tempatkan komponen UI kustom atau yang diimpor dari pustaka ini di dalam `src/components/ui/` atau `src/components/shared/` sesuai kebutuhan.

Dengan memanfaatkan alat dan pustaka ini, Anda dapat membangun antarmuka pengguna yang menarik dan fungsional dengan lebih efisien.
