# Portal Resmi Pemerintah Kabupaten Banjarnegara

Ini adalah repositori untuk pengembangan website portal resmi Pemerintah Kabupaten Banjarnegara. Proyek ini dibangun dengan mengutamakan performa tinggi, aksesibilitas (WCAG-compliant), desain modern yang ramah pengguna, dan responsivitas pada semua ukuran layar.

## 🚀 Teknologi yang Digunakan

Proyek ini dibangun menggunakan *stack* teknologi modern:
- **[Next.js](https://nextjs.org/)** (v14.2+) - Framework React dengan pendekatan *App Router* untuk rendering yang cepat.
- **[React](https://react.dev/)** (v18) - Library UI utama.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS *utility-first* untuk *styling* cepat dan efisien.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript untuk keamanan penulisan kode (Type Safety).
- **[Lucide React](https://lucide.dev/)** - Kumpulan ikon *open-source* yang modern.

## ✨ Fitur Utama

- **Desain Responsif & Modern:** Tampilan disesuaikan dengan sempurna di semua perangkat (Desktop, Tablet, Mobile) tanpa menyempit (*squeezed*) pada resolusi tanggung.
- **Aksesibilitas Tinggi (A11y):** Dilengkapi dengan widget aksesibilitas (High Contrast, Text Scaling) untuk kemudahan akses bagi semua kalangan masyarakat.
- **Navigasi Cerdas:** Dropdown menu dan *hamburger menu* (mobile) yang rapi untuk menampilkan banyak sub-halaman pemerintahan secara terstruktur.
- **Skema Warna Nyaman (Soothing Palette):** Kombinasi warna yang tidak menyilaukan mata untuk durasi baca yang lama.

## 🛠️ Cara Menjalankan Secara Lokal

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/en) (versi 18.x ke atas) di komputer Anda.

1. **Clone Repositori ini** (Jika Anda belum memilikinya di lokal)
   ```bash
   git clone <url-repositori-anda>
   cd Banjarnegara
   ```

2. **Instal Dependencies**
   Gunakan `npm` (atau `yarn`, `pnpm` sesuai preferensi Anda):
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   
4. **Buka Browser**
   Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya. Halaman akan otomatis melakukan *refresh* saat Anda mengubah file (Hot Module Replacement).

## 📁 Struktur Folder Utama

- `src/app/` : Konfigurasi halaman dan sistem *routing* utama proyek (Next.js App Router).
- `src/components/` : Kumpulan komponen terpisah yang dapat digunakan berulang (seperti `Header`, `Footer`, `StatCounter`, `AccessibilityWidget`).
- `public/images/` : Tempat menyimpan aset statis seperti logo kabupaten, foto *banner*, dll.

## 📜 Skrip Tambahan

- `npm run build`: Melakukan kompilasi (*build*) proyek untuk persiapan *deploy* ke *production*.
- `npm run start`: Menjalankan server *production* lokal setelah proses *build* selesai.
- `npm run lint`: Memeriksa masalah sintaks dan kerapian kode menggunakan ESLint.

---
*Dikelola dengan ❤️ oleh tim pengembang untuk Kabupaten Banjarnegara.*
