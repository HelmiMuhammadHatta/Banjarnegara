import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Kontak */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Pemerintah Kabupaten Banjarnegara</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-sm">Jl. Pemuda No. 71, Banjarnegara, Jawa Tengah, Indonesia 53414</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-sm">(0286) 591218</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-sm">kominfo@banjarnegarakab.go.id</span>
              </li>
            </ul>
          </div>

          {/* Dinas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Dinas & Badan</h4>
            {/* FIX: Link Penting dibuat konsisten grid card (Point A.4) */}
            <ul className="grid grid-cols-1 gap-3">
              <li><Link href="#" className="text-sm hover:text-primary-400 transition-colors">Dinas Kominfo</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary-400 transition-colors">Dinas Kesehatan</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary-400 transition-colors">Dinas Pendidikan</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary-400 transition-colors">BAPPEDA</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary-400 transition-colors">BPPKAD</Link></li>
            </ul>
          </div>

          {/* Kecamatan */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Kecamatan</h4>
            <ul className="grid grid-cols-1 gap-3">
              <li><Link href="#" className="text-sm hover:text-primary-400 transition-colors">Kec. Banjarnegara</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary-400 transition-colors">Kec. Batur</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary-400 transition-colors">Kec. Pejawaran</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary-400 transition-colors">Kec. Wanadadi</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary-400 transition-colors">Selengkapnya &rarr;</Link></li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Sosial Media</h4>
            <div className="flex gap-4 mb-8">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Pemerintah Kabupaten Banjarnegara. All rights reserved.</p>
          {/* FIX: Audio player mengambang dihilangkan / tidak disertakan (Point C.11) */}
        </div>
      </div>
    </footer>
  );
}
