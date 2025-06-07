# Advanced Workflow and AI Collaboration Guide

Panduan ini bertujuan untuk membantu Anda dan AI Code Editor Agent Anda (selanjutnya disebut "AI Agent") dalam memulai dan mengembangkan proyek secara sistematis menggunakan boilerplate ini. Fokusnya adalah pada perencanaan awal yang efektif dan kolaborasi yang produktif melalui chat prompt.

## Bagian 1: Alur Kerja Proyek yang Sistematis dengan AI Agent

### Langkah 0: Persiapan Awal oleh User

## Alur Kerja Kolaboratif Terintegrasi

### Fase 1: Inisiasi Proyek & Pemahaman Mendalam (User & AI Agent)

Pada fase ini, User dan AI Agent bekerja sama untuk membangun fondasi proyek yang kuat.

1.  **Persiapan Awal oleh User**:
    *   User memiliki ide atau konsep awal proyek.
    *   User menyiapkan draf awal kebutuhan atau tujuan proyek, jika ada (bisa sangat sederhana).

2.  **Briefing Komprehensif AI Agent**:
    *   **User**: Menggunakan prompt dari **[`docs/05-comprehensive-ai-chat-prompts.md`](./05-comprehensive-ai-chat-prompts.md)** (terutama "Fase 1: Inisiasi AI Agent & Analisis Komprehensif Boilerplate"), minta AI Agent untuk:
        *   Menganalisis Codebase Boilerplate secara menyeluruh.
        *   Mengidentifikasi semua tools dan kapabilitas yang dimilikinya (termasuk MCP Server).
    *   **AI Agent**: Melakukan analisis, mengajukan pertanyaan klarifikasi jika perlu, dan memberikan ringkasan pemahamannya tentang boilerplate dan kemampuannya.

3.  **Penggalian Kebutuhan Proyek Secara Detail**:
    *   **User**: Menyampaikan ide proyek awal kepada AI Agent.
    *   **AI Agent**: Menggunakan prompt dari **[`docs/05-comprehensive-ai-chat-prompts.md`](./05-comprehensive-ai-chat-prompts.md)** (terutama "Fase 2: Definisi Proyek, Penggalian Informasi Detail, & Riset Aktif"), AI Agent akan:
        *   Mengajukan pertanyaan mendalam untuk memahami target pengguna, masalah yang diselesaikan, fitur inti (MVP), referensi desain/fungsionalitas, dan jenis data.
        *   Menggunakan tools (seperti pencarian web atau MCP Server) untuk melakukan riset terkait teknologi, solusi, atau inspirasi yang relevan berdasarkan diskusi.
        *   Menyajikan hasil riset dan opsi kepada User.

4.  **Penyusunan Dokumen Kebutuhan Fungsional**:
    *   **AI Agent & User**: Berkolaborasi untuk membuat atau menyempurnakan dokumen `docs/project/project_functional_requirements.md`. AI Agent dapat membantu merangkum diskusi dan menyusun draf awal berdasarkan informasi yang terkumpul.
    *   Dokumen ini harus mencakup tujuan proyek, target pengguna, fitur inti (MVP) beserta deskripsinya, model data awal (jika sudah teridentifikasi), dan pilihan teknologi tambahan.

5.  **Setup Memori & Aturan Proyek Awal**:
    *   **AI Agent**: Berdasarkan diskusi, AI Agent dapat mengusulkan atau membuat "Memori Proyek" dan "Aturan Proyek" awal (termasuk preferensi gaya coding, penamaan, dll.) untuk memastikan konsistensi.
    *   **Kolaborasi User & AI Agent**: Mendefinisikan dan membuat file `.windsurfrules` yang berisi aturan-aturan spesifik proyek untuk menjaga konsistensi, gaya kode, dan praktik terbaik yang disepakati. AI Agent dapat membantu mengusulkan aturan berdasarkan karakteristik proyek.
    *   **User**: Meninjau dan menyetujui memori proyek, aturan proyek, dan `.windsurfrules` yang telah dibuat.

### Fase 2: Perencanaan Kolaboratif & Desain Rinci (User & AI Agent)

Setelah kebutuhan dasar terdefinisi, User dan AI Agent merencanakan implementasi.

1.  **Pemecahan Tugas (Task Breakdown)**:
    *   **User & AI Agent**: Bersama-sama memecah fitur-fitur dari `project_functional_requirements.md` menjadi tugas-tugas yang lebih kecil dan dapat dikelola.
    *   Diskusikan dependensi antar tugas.

2.  **Riset Teknis & Desain Lanjutan**:
    *   **AI Agent**: Dapat membantu User dalam meriset pola desain, arsitektur komponen, atau solusi teknis spesifik untuk tugas tertentu menggunakan tools-nya.
    *   Contoh: "AI Agent, untuk fitur autentikasi, bisakah kamu carikan perbandingan antara menggunakan Supabase Auth dan NextAuth.js dalam konteks boilerplate kita?"

3.  **Simulasi Sistem "Task Master AI" Sederhana**:
    Meskipun tanpa Task Master MCP formal, Anda bisa mensimulasikan sistem manajemen tugas yang efektif:
    *   **Gunakan Chat sebagai Log Tugas**: Thread chat Anda dengan AI Agent menjadi catatan alami dari permintaan, diskusi, dan implementasi.
    *   **File `docs/project/tasks.md`**: Buat dan kelola file ini bersama AI Agent untuk mendaftar tugas, statusnya (misalnya, To Do, In Progress, Done, Blocked), prioritas, dan penanggung jawab (bisa User untuk definisi/review, AI Agent untuk draf implementasi).
    *   **Sesi Perencanaan Reguler**: Mulai setiap sesi pengembangan dengan meninjau `tasks.md` dan `project_functional_requirements.md` bersama AI Agent untuk menentukan fokus.

### Fase 3: Pengembangan Iteratif & Implementasi (User & AI Agent)

Ini adalah fase inti di mana kode mulai ditulis secara kolaboratif.

1.  **Pemilihan Tugas**:
    *   **User**: Memilih satu tugas atau fitur kecil dari `tasks.md` untuk dikerjakan.

2.  **Instruksi & Implementasi Awal oleh AI Agent**:
    *   **User**: Memberikan instruksi yang jelas dan spesifik kepada AI Agent mengenai implementasi tugas tersebut. Sertakan konteks yang relevan (misalnya, referensi ke bagian tertentu di `project_functional_requirements.md`, tipe data yang sudah ada, atau komponen UI yang ingin digunakan).
    *   **AI Agent**: Menghasilkan draf kode, membuat file baru, atau memodifikasi file yang ada sesuai instruksi. AI Agent juga dapat membantu membuat unit test awal.

3.  **Review, Feedback, & Iterasi**:
    *   **User**: Mereview kode yang dihasilkan AI Agent. Periksa fungsionalitas, keterbacaan, kesesuaian dengan standar proyek, dan potensi bug.
    *   **User**: Memberikan feedback yang konstruktif dan spesifik kepada AI Agent.
    *   **AI Agent**: Melakukan revisi berdasarkan feedback.
    *   Proses ini diulangi hingga User puas dengan hasilnya.

4.  **Debugging Bersama**:
    *   Jika terjadi masalah atau bug, **User & AI Agent** dapat bekerja sama untuk melakukan debugging. AI Agent dapat membantu menganalisis pesan error, menyarankan solusi, atau menambahkan logging.

### Fase 4: Finalisasi, Dokumentasi, & Refleksi (User & AI Agent)

Setelah satu iterasi pengembangan selesai, penting untuk merapikan dan belajar.

1.  **Pembaruan Dokumentasi**:
    *   **AI Agent**: Dapat membantu memperbarui dokumentasi teknis atau JSDoc untuk kode yang baru ditulis atau diubah.
    *   **User**: Memastikan semua dokumentasi relevan (termasuk `tasks.md` dan `project_functional_requirements.md` jika ada perubahan lingkup) diperbarui.

2.  **Review & Refleksi**:
    *   **User & AI Agent**: Melakukan review singkat terhadap apa yang telah dicapai, tantangan yang dihadapi, dan pembelajaran dari iterasi tersebut.
    *   Diskusikan dan sepakati prioritas untuk iterasi pengembangan berikutnya.

---

**Tips Tambahan untuk Kolaborasi Efektif:**

*   **Jadilah Spesifik**: Semakin spesifik instruksi Anda, semakin baik hasil yang diberikan AI Agent.
*   **Berikan Konteks**: Selalu ingatkan AI Agent tentang konteks proyek, aturan, atau keputusan sebelumnya jika relevan.
*   **Satu Tugas Sekaligus**: Fokus pada satu tugas atau fitur kecil pada satu waktu untuk menghindari kebingungan.
*   **Sabar & Eksperimen**: AI adalah alat bantu. Mungkin perlu beberapa kali iterasi untuk mendapatkan hasil yang sempurna. Jangan ragu untuk bereksperimen dengan cara Anda berinteraksi.

Dengan mengikuti alur kerja kolaboratif ini, Anda dapat memanfaatkan potensi penuh AI Agent Anda untuk membangun proyek yang lebih baik dan lebih cepat.

Semoga panduan ini membantu Anda dan AI Agent Anda berkolaborasi dengan lebih efektif!
