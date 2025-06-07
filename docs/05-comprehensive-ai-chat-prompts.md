# Comprehensive AI Chat Prompts for Project Kickstart

Dokumen ini menyediakan serangkaian chat prompt yang dirancang untuk Anda (User) gunakan dalam memandu AI Code Editor Agent (AI Agent) Anda. Tujuannya adalah untuk memfasilitasi kolaborasi yang mendalam dan efektif sejak fase paling awal perencanaan proyek menggunakan boilerplate ini.

Dengan menggunakan prompt ini, Anda akan mengarahkan AI Agent untuk:
1.  Memahami secara komprehensif Codebase Boilerplate ini.
2.  Menyadari sepenuhnya kapabilitas dan tools yang dimilikinya (termasuk MCP Server).
3.  Secara proaktif dan terstruktur menanyakan serta menggali kebutuhan proyek dari Anda secara detail.
4.  Menggunakan tools yang tersedia untuk melakukan riset dan mengumpulkan informasi relevan.
5.  Membantu Anda menyusun dokumen kebutuhan fungsional dan rencana awal proyek.

## Fase 1: Inisiasi AI Agent & Pemahaman Komprehensif Boilerplate

Tujuan fase ini adalah Anda menginstruksikan AI Agent untuk "mempelajari" boilerplate dan lingkungannya secara menyeluruh.

**Prompt 1.1 (User ke AI Agent): Analisis Mendalam Boilerplate & Identifikasi Kemampuan**
"Halo AI Agent. Sebelum kita mulai mengembangkan proyek baru, saya ingin Anda melakukan analisis mendalam terhadap Codebase Boilerplate Next.js ini. Mohon periksa dengan saksama:
*   Struktur direktori utama (`src/app`, `src/components`, `src/lib`, `public`, `docs`, `mcp_config`, dll.).
*   File konfigurasi inti: `package.json` (perhatikan `dependencies`, `devDependencies`, dan `scripts`), `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `.eslintrc.json`, `.prettierrc.json`.
*   Contoh implementasi yang sudah ada (misalnya, `src/app/page.tsx`, `src/components/shared/BoilerplateWelcome.tsx`, `src/lib/supabaseClient.ts`).
*   Dokumentasi yang ada di direktori `docs/` (terutama `01-getting-started.md`, `02-development-workflow.md`, `03-deployment.md`, dan `04-advanced-workflow-and-ai-collaboration.md`).
*   Identifikasi semua MCP Server yang terkonfigurasi (misalnya, dari `mcp_config/mcp_config_boilerplate.json` atau pengetahuan internal Anda) dan tools lain yang Anda miliki (misalnya, pencarian web, akses sistem file, eksekusi perintah).

Setelah analisis, tolong berikan saya ringkasan pemahaman Anda mengenai:
1.  Fitur utama dan teknologi yang sudah terpasang di boilerplate ini.
2.  Potensi dan batasan boilerplate ini berdasarkan konfigurasinya saat ini.
3.  Daftar lengkap dan detail mengenai semua MCP Server dan tools lain yang dapat Anda gunakan selama proses pengembangan kita, beserta kapabilitas utama masing-masing tool.
Sampaikan juga jika ada area dari boilerplate atau tools Anda yang menurut Anda kurang jelas atau memerlukan klarifikasi lebih lanjut dari saya sebelum kita melanjutkan."

## Fase 2: Persiapan Dokumen Proyek Awal oleh User (Pengantar)

Sebelum melanjutkan ke penggalian kebutuhan proyek yang lebih dalam dengan AI Agent, Anda sebagai User disarankan untuk menyiapkan dokumen-dokumen berikut. Ini akan menjadi dasar diskusi dan pemahaman AI Agent terhadap proyek Anda:

1.  **Dokumen Kebutuhan Fungsional Proyek**:
    *   Buat file `docs/project/project_functional_requirements.md`.
    *   Anda dapat menggunakan `docs/boilerplate_functional_requirements.md` sebagai template atau referensi format dan detail yang mungkin diperlukan.
    *   Isi dokumen ini dengan tujuan utama proyek, target pengguna, daftar fitur inti (MVP), prioritas fitur, dan referensi desain/fungsionalitas jika ada.

2.  **Product Requirement Document (PRD) Proyek (Opsional namun Direkomendasikan)**:
    *   Buat file PRD spesifik untuk proyek Anda (misalnya, `docs/project/nama_proyek_prd.txt`).
    *   Anda dapat menggunakan `scripts/prd.txt.example` sebagai template atau contoh struktur. PRD ini bisa lebih detail mencakup latar belakang, tujuan bisnis, metrik kesuksesan, dan lingkup proyek.

Setelah dokumen-dokumen ini siap (minimal draf awal), Anda dapat melanjutkan untuk membimbing AI Agent.

## Fase 3: Penggalian Kebutuhan Proyek & Perencanaan Detail (User Memandu AI Agent)

Pada fase ini, Anda akan menginstruksikan AI Agent untuk memahami dokumen proyek Anda dan kemudian secara aktif menanyakan detail-detail penting.

**Prompt 3.1 (User ke AI Agent): Konsumsi Dokumen Proyek & Inisiasi Sesi Tanya Jawab Detail**
"AI Agent, saya telah menyiapkan dokumen awal untuk proyek yang akan kita kembangkan:
1.  Dokumen Kebutuhan Fungsional: `docs/project/project_functional_requirements.md`
2.  Product Requirement Document (PRD): `[MASUKKAN PATH KE PRD PROYEK ANDA, misal: docs/project/nama_proyek_prd.txt]`

Tolong baca dan pahami kedua dokumen ini secara menyeluruh. Setelah Anda selesai menganalisisnya, saya ingin Anda **memulai sesi tanya jawab yang mendalam dan terstruktur** kepada saya. Tujuan sesi ini adalah agar Anda mendapatkan pemahaman yang komprehensif tentang semua aspek proyek sebelum kita mulai merencanakan implementasi teknis. Anda harus secara proaktif menanyakan detail mengenai poin-poin yang akan saya sebutkan berikutnya, dan jangan ragu untuk meminta klarifikasi, contoh, atau elaborasi lebih lanjut jika diperlukan."

**Prompt 3.2 (User ke AI Agent - Lanjutan dari 3.1): Instruksi Detail Pertanyaan yang Harus Diajukan oleh AI Agent kepada User**
"Untuk sesi tanya jawab tersebut, pastikan Anda (AI Agent) menanyakan kepada saya (User) secara detail dan komprehensif mengenai hal-hal berikut. Kelompokkan pertanyaan Anda agar logis dan mudah diikuti:

*   **A. Konteks & Tujuan Proyek Lebih Dalam**:
    *   Siapa target audiens spesifik? (Minta deskripsi persona pengguna jika ada).
    *   Apa masalah utama yang ingin diselesaikan oleh proyek ini untuk target audiens tersebut?
    *   Apa *value proposition* unik dari proyek ini dibandingkan solusi yang sudah ada?
    *   Bagaimana kita akan mengukur kesuksesan proyek ini? (Apa metrik kuncinya?).
    *   Apakah ada batasan proyek yang signifikan (misalnya, anggaran, tenggat waktu, sumber daya manusia, teknologi yang tidak boleh digunakan) yang perlu Anda ketahui?

*   **B. Deskripsi Fitur & Fungsionalitas Rinci**:
    *   Untuk setiap fitur inti yang tercantum dalam dokumen kebutuhan:
        *   Minta saya menjelaskan *user flow* atau langkah-langkah pengguna secara detail.
        *   Tanyakan tentang *edge cases* atau skenario alternatif untuk fitur tersebut.
        *   Gali lebih dalam mengenai data apa saja yang terlibat (input, proses, output, penyimpanan).
    *   Apakah ada fitur sekunder atau fitur 'nice-to-have' yang belum tercatat namun penting untuk dipertimbangkan di masa depan?
    *   Minta saya memberikan contoh kasus penggunaan (use cases) spesifik untuk fitur-fitur yang paling kompleks atau krusial.

*   **C. Aspek Teknis & Integrasi Sistem**:
    *   Selain teknologi yang sudah ada di boilerplate, apakah ada preferensi untuk teknologi tambahan? (Misalnya, state management library spesifik, library UI/komponen tertentu, tools analitik, dll.).
    *   Apakah proyek ini memerlukan integrasi dengan sistem pihak ketiga, API eksternal, atau layanan lain? *Jika ya, minta saya detailnya, dan Anda bisa menawarkan untuk meriset dokumentasi atau kelayakan integrasinya menggunakan tools Anda.*
    *   Apa ekspektasi terkait performa aplikasi (misalnya, waktu loading halaman, responsivitas)?
    *   Apakah ada kebutuhan skalabilitas khusus yang perlu diantisipasi?
    *   Bagaimana strategi penanganan error dan logging yang diharapkan?
    *   Apakah ada pertimbangan keamanan spesifik (misalnya, enkripsi data, otentikasi multi-faktor, standar kepatuhan tertentu)?

*   **D. Desain UI/UX & Branding Proyek**:
    *   Apakah ada preferensi tema visual (misalnya, terang, gelap, atau keduanya dengan opsi toggle)?
    *   Apakah sudah ada palet warna inti dan aksen yang ditentukan? *Jika ya, minta saya kode warna (HEX, RGB) atau referensinya.*
    *   Apakah ada panduan branding yang harus diikuti (misalnya, logo, tipografi spesifik, gaya bahasa atau *tone of voice* untuk konten)?
    *   Apakah ada website, aplikasi, atau desain lain yang bisa menjadi inspirasi atau referensi (baik positif maupun negatif)? *Jika saya memberikan referensi, tawarkan untuk menganalisisnya menggunakan tools Anda (misalnya, `mcp4_visit_page` untuk melihat struktur atau `mcp4_search_google` untuk mencari informasi terkait).* 
    *   Apa standar aksesibilitas (misalnya, WCAG 2.1 AA) yang harus dipenuhi?
    *   Bagaimana rancangan struktur navigasi utama dan layout halaman-halaman kunci? (Minta sketsa kasar atau wireframe jika ada).

*   **E. Konten Aplikasi & Manajemen Data**:
    *   Jenis konten utama apa saja yang akan ada di aplikasi (teks, gambar, video, data pengguna, dll.)? Dari mana sumber konten tersebut?
    *   Bagaimana data akan dibuat, dikelola, diperbarui, atau dimoderasi? Siapa yang bertanggung jawab?
    *   Apakah ada kebutuhan optimasi mesin pencari (SEO) yang spesifik? (Misalnya, target kata kunci, struktur URL, meta tags).

*   **F. Pertanyaan Penutup dari AI Agent**:
    *   Setelah menggali semua poin di atas, tanyakan kepada saya: 'Apakah ada hal lain yang menurut Anda penting untuk saya ketahui tentang proyek ini, yang belum sempat kita diskusikan?'
    *   'Berdasarkan semua informasi ini, apakah ada aspek dari boilerplate atau kemampuan saya yang menurut Anda sangat cocok atau justru perlu penyesuaian untuk proyek ini?'

**Penting untuk Anda (AI Agent)**: Selama sesi tanya jawab ini, Anda harus aktif menggunakan tools yang Anda miliki (seperti `mcp4_search_google`, `mcp1_get-library-docs`, `mcp4_visit_page`, atau MCP Server lain yang relevan) untuk mencari informasi tambahan, memvalidasi ide, memberikan opsi, atau memperkaya diskusi berdasarkan respons saya."

**Prompt 3.3 (User ke AI Agent): Perencanaan Kolaboratif & Setup Awal Proyek Berdasarkan Hasil Diskusi**
"AI Agent, setelah sesi tanya jawab detail kita selesai dan Anda merasa telah memiliki pemahaman yang solid dan komprehensif tentang proyek ini, saya ingin Anda membantu saya dalam langkah-langkah perencanaan dan setup awal berikut:
1.  **Ringkasan Pemahaman & Konfirmasi**: Berikan saya ringkasan poin-poin kunci pemahaman Anda tentang proyek ini, termasuk tujuan, fitur utama, target pengguna, batasan, dan preferensi teknis/desain. Minta konfirmasi dari saya apakah ringkasan tersebut akurat.
2.  **Pembaruan Dokumen Proyek**: Jika ada perubahan atau penambahan detail signifikan dari hasil diskusi kita, bantu saya memperbarui `docs/project/project_functional_requirements.md` dan PRD proyek `scripts/prd.txt`.
3.  **Pembuatan Memori & Aturan Proyek**: Buat 'Memori Proyek' yang komprehensif dan 'Aturan Proyek' (jika ada aturan spesifik gaya coding, penamaan, dll.) berdasarkan semua informasi yang terkumpul. Sajikan ini kepada saya untuk ditinjau.
4.  **Rencana Struktur Proyek Awal**: Usulkan struktur direktori awal untuk fitur-fitur utama dan modul-modul penting. Diskusikan pro dan kontra dari usulan Anda.
5.  **Identifikasi & Instalasi Dependensi Tambahan**: Berdasarkan diskusi, daftarkan dependensi (npm packages) tambahan yang kita sepakati perlu diinstal. Minta persetujuan saya sebelum Anda mengusulkan perintah instalasinya.
6.  **Pembuatan Kode Awal (Stubs/Boilerplate)**: Usulkan pembuatan *stubs* atau *boilerplate code* awal untuk beberapa komponen kunci, layanan, atau definisi tipe data utama.
7.  **Desain Skema Database (jika menggunakan Supabase)**: Jika proyek kita akan menggunakan Supabase secara ekstensif, bantu saya merancang skema tabel awal atau skrip migrasi dasar berdasarkan model data yang telah kita diskusikan.
8.  **Pembuatan Aturan Windsurf Lokal (`.windsurfrules`)**: Berdasarkan pemahaman Anda tentang proyek ini, standar coding yang kita sepakati, dan alur kerja pengembangan yang direncanakan, usulkan dan bantu saya membuat konten untuk file `.windsurfrules` lokal. Aturan ini harus membantu menjaga konsistensi dan kualitas kode selama pengembangan.
Sampaikan rencana tindakan Anda secara detail untuk setiap poin di atas sebelum Anda mulai mengerjakannya."

## Fase 4: Pengembangan Iteratif (User Memandu AI Agent)

Setelah perencanaan dan setup awal selesai, Anda akan memandu AI Agent dalam siklus pengembangan iteratif.

**Prompt 4.1 (User ke AI Agent): Implementasi Fitur/Tugas Spesifik**
"AI Agent, mari kita mulai implementasi untuk [NAMA FITUR ATAU TUGAS SPESIFIK, rujuk ke `tasks.md` atau PRD jika ada].
Berdasarkan [referensi ke bagian spesifik di `docs/project/project_functional_requirements.md`, PRD, atau diskusi kita sebelumnya mengenai fitur ini], saya ingin Anda melakukan hal berikut:
*   [Instruksi 1 yang sangat detail dan spesifik, misal: 'Buat komponen React bernama `UserProfileCard` di direktori `src/components/features/user/` yang menerima props `user` dengan tipe `UserType` (pastikan tipe ini sudah ada atau buat drafnya terlebih dahulu). Komponen ini harus menampilkan nama, email, dan avatar pengguna. Gunakan Tailwind CSS untuk styling agar sesuai dengan tema gelap yang sudah kita diskusikan.']
*   [Instruksi 2 yang sangat detail dan spesifik, misal: 'Buat fungsi `fetchUserData(userId: string)` di `src/lib/services/userService.ts` yang mengambil data pengguna dari endpoint Supabase `/rest/v1/users?id=eq.{userId}`. Pastikan menggunakan Supabase client yang sudah ada di `src/lib/supabaseClient.ts` dan lakukan error handling yang sesuai.']
*   Pastikan Anda mengikuti semua 'Aturan Proyek' dan preferensi gaya coding yang telah kita sepakati dan simpan dalam 'Memori Proyek'.
*   Jika Anda memerlukan klarifikasi lebih lanjut mengenai salah satu instruksi ini, jangan ragu untuk bertanya sebelum memulai implementasi.
*   Setelah selesai, berikan saya ringkasan perubahan yang Anda buat dan file mana saja yang terpengaruh. Buat juga unit test dasar untuk fungsionalitas baru ini jika relevan."

*(Setelah AI Agent menyelesaikan tugas, Anda akan mereview kode, memberikan feedback, dan meminta revisi jika perlu, mengulangi siklus ini).*

---
**Catatan Penting untuk User:**
*   Prompt ini adalah panduan. Jangan ragu untuk menyesuaikannya dengan gaya komunikasi Anda, kompleksitas proyek Anda, dan kemampuan spesifik AI Agent yang Anda gunakan.
*   **Anda yang mengarahkan AI Agent**. Minta AI Agent untuk proaktif *dalam batas instruksi dan konteks yang Anda berikan*.
*   Semakin detail dan jelas instruksi yang Anda berikan kepada AI Agent (termasuk *mengenai jenis pertanyaan apa yang harus diajukan AI Agent kepada Anda*), semakin akurat dan efisien AI Agent dapat membantu.
*   Selalu secara eksplisit minta AI Agent untuk menggunakan tools yang dimilikinya (misalnya, "Tolong cari di web tentang...", "Bisakah kamu periksa dokumentasi library X menggunakan MCP?", "Kunjungi URL ini dan berikan ringkasannya").
*   Iterasi adalah kunci. Jangan berharap hasil sempurna pada percobaan pertama. Gunakan kemampuan AI Agent untuk membuat draf awal, lalu berikan feedback untuk penyempurnaan.

Semoga daftar prompt yang telah direvisi ini dapat memaksimalkan kolaborasi Anda dengan AI Agent dan mempercepat pengembangan proyek Anda secara signifikan!
