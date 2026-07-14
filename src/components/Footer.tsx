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
            <ul className="flex flex-wrap gap-2">
              {['Dinas Kominfo', 'Dinas Kesehatan', 'Dinas Pendidikan', 'BAPPEDA', 'BPPKAD'].map((item) => {
                const url = `/pemerintahan/opd/${item.toLowerCase().replace(/ /g, '-')}`;
                return (
                <li key={item}>
                  <Link href={url} className="inline-block px-3 py-2 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700 hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-all shadow-sm">
                    {item}
                  </Link>
                </li>
              )})}
            </ul>
          </div>

          {/* Kecamatan */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Kecamatan</h4>
            <ul className="flex flex-wrap gap-2">
              {['Kec. Banjarnegara', 'Kec. Batur', 'Kec. Pejawaran', 'Kec. Wanadadi', 'Selengkapnya \u2192'].map((item) => {
                const url = item.includes('Selengkapnya') ? '/pemerintahan/letak-geografis' : `/kecamatan/${item.toLowerCase().replace(/ /g, '-').replace(/\./g, '')}`;
                return (
                <li key={item}>
                  <Link href={url} className="inline-block px-3 py-2 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700 hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-all shadow-sm">
                    {item}
                  </Link>
                </li>
              )})}
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Sosial Media</h4>
            <div className="flex gap-4 mb-8">
              <Link href="https://facebook.com/pemkabbanjarnegara" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com/pemkabbanjarnegara" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com/pemkabbanjarnegara" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://youtube.com/pemkabbanjarnegara" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; {new Date().getFullYear()} Pemerintah Kabupaten Banjarnegara. All rights reserved.</p>
          
          <div className="flex items-center gap-4 bg-slate-800/50 p-2 rounded-full border border-slate-700/50">
            <span className="text-xs font-medium text-slate-400 pl-3">Radio Suara Banjarnegara</span>
            <audio 
              controls 
              className="h-8 w-[200px] opacity-70 hover:opacity-100 transition-opacity grayscale contrast-125"
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              title="Radio Suara Banjarnegara"
            >
              Browser Anda tidak mendukung audio.
            </audio>
          </div>
        </div>
      </div>
    </footer>
  );
}
