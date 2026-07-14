import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Calendar, AlertTriangle, FileText, Database, ShieldAlert, MonitorSmartphone, MessageCircle, Maximize } from 'lucide-react';
import StatCounter from '@/components/StatCounter';

const FALLBACK_IMAGE = "https://picsum.photos/seed/banjarnegara-fallback/800/600";

// Mock Data Berita (Bisa diganti fetch dari WP API nantinya)
const BERITA_TERBARU = [
  {
    id: 1,
    title: "Pj Bupati Banjarnegara Buka Festival Budaya Dieng 2024",
    date: "12 Agustus 2024",
    image: "https://picsum.photos/seed/budaya-dieng/800/600",
    category: "Pemerintahan",
    excerpt: "Festival Budaya Dieng kembali digelar dengan meriah, menampilkan berbagai kesenian tradisional dan pemotongan rambut gimbal yang menjadi daya tarik utama."
  },
  {
    id: 2,
    title: "Pemkab Salurkan Bantuan Air Bersih ke 5 Kecamatan Terdampak Kemarau",
    date: "10 Agustus 2024",
    image: "https://picsum.photos/seed/bantuan-air/800/600",
    category: "Sosial",
    excerpt: "Menghadapi musim kemarau panjang, BPBD mendistribusikan jutaan liter air bersih ke wilayah selatan yang mengalami krisis pasokan air."
  },
  {
    id: 3,
    title: "Penghargaan Kabupaten Layak Anak Tingkat Madya Diraih Banjarnegara",
    date: "08 Agustus 2024",
    image: "https://picsum.photos/seed/layak-anak/800/600",
    category: "Prestasi",
    excerpt: "Kementerian PPPA memberikan penghargaan KLA Tingkat Madya sebagai bentuk apresiasi atas komitmen pemda dalam menjamin hak anak."
  },
  {
    id: 4,
    title: "Perbaikan Jalan Penghubung Antar Desa Selesai Tepat Waktu",
    date: "05 Agustus 2024",
    image: "https://picsum.photos/seed/infrastruktur-jalan/800/600",
    category: "Infrastruktur",
    excerpt: "Dinas PUPR memastikan proyek peningkatan ruas jalan strategis kabupaten telah selesai 100% dan siap digunakan oleh warga setempat."
  }
];

export default function Home() {
  return (
    <>
      {/* 1. Hero Section - FIX: Desain lebih modern dan bersih (Point A.1) */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/dieng.png" 
            alt="Pemandangan Dieng Banjarnegara" 
            fill
            className="object-cover text-transparent bg-slate-800"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-600/80 text-sm font-medium mb-4 backdrop-blur-sm border border-primary-500/50">
              Selamat Datang di Portal Resmi
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Pemerintah Kabupaten Banjarnegara
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl">
              Mewujudkan Banjarnegara yang Bermartabat dan Sejahtera melalui transparansi dan pelayanan publik yang prima.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#layanan" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                Layanan Publik
              </Link>
              <Link href="#berita" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-md border border-white/20 transition-colors flex items-center gap-2">
                Berita Terbaru
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. Statistik Daerah */}
      <StatCounter />

      {/* 1.75. Akses Cepat Layanan Publik */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Akses Cepat Layanan Publik</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Portal layanan terintegrasi untuk memudahkan masyarakat mengakses informasi dan layanan pemerintah secara cepat dan transparan.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {[
              { title: 'LAPOR!', desc: 'Aspirasi & Pengaduan', href: 'https://lapor.go.id', icon: MessageCircle, color: 'text-red-500', bg: 'bg-red-50' },
              { title: 'PPID', desc: 'Informasi Publik', href: '/pustaka-data/ppid', icon: MonitorSmartphone, color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { title: 'Open Data', desc: 'Portal Data Terpadu', href: '/pustaka-data/open-data', icon: Database, color: 'text-blue-500', bg: 'bg-blue-50' },
              { title: 'LPSE', desc: 'Pengadaan Elektronik', href: '/pustaka-data/lpse', icon: FileText, color: 'text-amber-500', bg: 'bg-amber-50' },
              { title: 'JDIH', desc: 'Dokumentasi Hukum', href: '/pustaka-data/jdih', icon: ShieldAlert, color: 'text-indigo-500', bg: 'bg-indigo-50' },
              { title: 'Satu Data', desc: 'Integrasi Data Daerah', href: '/pustaka-data/satu-data', icon: Maximize, color: 'text-purple-500', bg: 'bg-purple-50' },
            ].map((srv, i) => {
              const Icon = srv.icon;
              return (
                <Link key={i} href={srv.href} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group flex flex-col items-center text-center">
                  <div className={`w-14 h-14 ${srv.bg} ${srv.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-1 group-hover:text-primary-600 transition-colors">{srv.title}</h3>
                  <p className="text-slate-500 text-xs line-clamp-2">{srv.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Berita Terbaru - FIX: Grid Card, No Internal Scrollbar (Point B.6 & C.10) */}
      <section id="berita" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Berita Terbaru</h2>
              <p className="text-slate-500 mt-2">Informasi terkini seputar Banjarnegara</p>
            </div>
            <Link href="/info-banjarnegara/arsip-berita" className="hidden sm:flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
              Lihat Semua <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BERITA_TERBARU.map((berita) => (
              <article key={berita.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden flex flex-col h-full">
                <div className="relative h-48 w-full">
                  <Image 
                    src={berita.image || FALLBACK_IMAGE}
                    alt={berita.title}
                    fill
                    className="object-cover bg-slate-200 text-transparent"
                  />
                  <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                    {berita.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center text-slate-400 text-xs mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{berita.date}</span>
                  </div>
                  {/* FIX: Hierarki Tipografi Jelas (Point A.2) */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight line-clamp-2 hover:text-primary-600 transition-colors cursor-pointer">
                    {berita.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {berita.excerpt}
                  </p>
                  <Link href={`/berita/${berita.id}`} className="text-primary-600 text-sm font-semibold flex items-center mt-auto hover:text-primary-800">
                    Baca Selengkapnya <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/info-banjarnegara/arsip-berita" className="inline-flex items-center justify-center w-full px-6 py-3 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Pengumuman & Layanan (Grid) */}
      <section className="py-16 bg-white" id="layanan">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Pengumuman Resmi */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <AlertTriangle className="text-amber-500 w-6 h-6" />
                Pengumuman Resmi
              </h2>
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-2 lg:p-4 flex flex-col gap-2">
                {[1, 2, 3].map((item) => (
                  <Link key={item} href={`/pengumuman/seleksi-cpns-2024-${item}`} className="block p-4 hover:bg-white transition-colors rounded-lg border border-transparent hover:border-slate-200 hover:shadow-sm">
                    <div className="flex gap-4">
                      <div className="hidden sm:flex flex-col items-center justify-center bg-white border border-slate-200 rounded-lg w-16 h-16 shrink-0 text-center shadow-sm">
                        <span className="text-lg font-bold text-primary-600 leading-none">1{item}</span>
                        <span className="text-xs text-slate-500 font-medium uppercase mt-1">Agu</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1 line-clamp-2">Seleksi Penerimaan CPNS dan PPPK Kabupaten Banjarnegara Tahun 2024</h4>
                        <p className="text-sm text-slate-500 flex items-center gap-2">
                          <FileText className="w-4 h-4" /> BKD Banjarnegara
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/pengumuman" className="inline-block mt-4 text-primary-600 font-medium text-sm hover:underline">
                Lihat Pengumuman Lainnya &rarr;
              </Link>
            </div>

            {/* Quick Links / Layanan Penting - FIX: Card Style Konsisten (Point A.3 & A.4) */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Layanan Publik</h2>
              <div className="grid grid-cols-1 gap-4">
                <Link href="/pustaka-data/open-data" className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-primary-500 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-primary-600 transition-colors">Open Data</h4>
                    <p className="text-xs text-slate-500">Portal Data Terpadu Banjarnegara</p>
                  </div>
                </Link>
                <Link href="/pustaka-data/ppid" className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MonitorSmartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">PPID</h4>
                    <p className="text-xs text-slate-500">Informasi Publik Daerah</p>
                  </div>
                </Link>
                <Link href="/pustaka-data/lpse" className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-500 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-amber-600 transition-colors">LPSE</h4>
                    <p className="text-xs text-slate-500">Layanan Pengadaan Secara Elektronik</p>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Lawan Hoax - FIX: Visual menonjol tapi rapi (Point B.7) */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-slate-800 rounded-2xl p-8 lg:p-12 border border-slate-700 shadow-xl overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
              <ShieldAlert className="w-96 h-96" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10 text-center md:text-left mb-8 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Banjarnegara Lawan Hoaks!</h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Jangan mudah percaya dengan informasi yang belum jelas kebenarannya. Saring sebelum sharing. Laporkan disinformasi dan berita bohong di sekitar Anda.
                </p>
              </div>
            </div>
            
            <div className="relative z-10 w-full md:w-auto">
              <Link href="/info-banjarnegara/lawan-hoax" className="block text-center w-full md:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-red-900/50 whitespace-nowrap">
                Cek Fakta Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
