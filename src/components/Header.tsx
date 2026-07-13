"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type SubmenuItem = {
  name: string;
  href: string;
};

type MenuItem = {
  name: string;
  href: string;
  submenu?: (SubmenuItem & { submenu?: SubmenuItem[] })[];
};

// FIX: Menambahkan struktur nested menu sesuai permintaan
const navLinks: MenuItem[] = [
  { name: 'Beranda', href: '/' },
  { 
    name: 'Pemerintahan', href: '/pemerintahan',
    submenu: [
      {
        name: 'Profil Kepala Daerah',
        href: '/pemerintahan/profil-kepala-daerah',
        submenu: [
          { name: 'Bupati', href: '/pemerintahan/profil-kepala-daerah/bupati' },
          { name: 'Wakil Bupati', href: '/pemerintahan/profil-kepala-daerah/wakil-bupati' },
          { name: 'Sekda', href: '/pemerintahan/profil-kepala-daerah/sekda' }
        ]
      },
      { name: 'Visi Misi', href: '/pemerintahan/visi-misi' },
      { name: 'Sejarah', href: '/pemerintahan/sejarah' },
      {
        name: 'Lambang Daerah',
        href: '/pemerintahan/lambang-daerah',
        submenu: [
          { name: 'Lambang Daerah Baru', href: '/pemerintahan/lambang-daerah/baru' },
          { name: 'Lambang Daerah Lama', href: '/pemerintahan/lambang-daerah/lama' }
        ]
      },
      { name: 'Gambaran Umum', href: '/pemerintahan/gambaran-umum' },
      { name: 'Letak Geografis', href: '/pemerintahan/letak-geografis' },
      { name: 'Pimpinan dan Alamat OPD', href: '/pemerintahan/pimpinan-opd' }
    ]
  },
  {
    name: 'Info Banjarnegara', href: '/info-banjarnegara',
    submenu: [
      { name: 'Arsip Berita', href: '/info-banjarnegara/arsip-berita' },
      { name: 'Arsip Berita OPD', href: '/info-banjarnegara/arsip-berita-opd' },
      { name: 'ASN Inspiratif', href: '/info-banjarnegara/asn-inspiratif' },
      {
        name: 'Galeri',
        href: '/info-banjarnegara/galeri',
        submenu: [
          { name: 'Galeri Foto', href: '/info-banjarnegara/galeri/foto' },
          { name: 'Galeri Video', href: '/info-banjarnegara/galeri/video' }
        ]
      },
      { name: 'Lawan HOAX', href: '/info-banjarnegara/lawan-hoax' }
    ]
  },
  { name: 'Arsitektur SPBE', href: '/arsitektur-spbe' },
  { name: 'Pengumuman', href: '/pengumuman' },
  {
    name: 'Pustaka Data', href: '/pustaka-data',
    submenu: [
      { name: 'JDIH', href: '/pustaka-data/jdih' },
      { name: 'Open Data', href: '/pustaka-data/open-data' },
      { name: 'PPID', href: '/pustaka-data/ppid' },
      { name: 'Satu Data', href: '/pustaka-data/satu-data' }
    ]
  },
];

// ---------------- DESKTOP MENU ITEM ----------------
const DesktopMenuItem = ({ item }: { item: MenuItem }) => {
  if (!item.submenu) {
    return (
      <li>
        <Link href={item.href} className="hover:text-primary-600 transition-colors py-4 inline-block font-medium">
          {item.name}
        </Link>
      </li>
    );
  }

  // FIX: Styling Dropdown Desktop dengan subtle shadow, hover halus, rounded corners
  return (
    <li className="relative group">
      <Link href={item.href} className="hover:text-primary-600 transition-colors py-4 inline-flex items-center gap-1 font-medium">
        {item.name}
        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
      </Link>
      
      {/* Dropdown 1 */}
      {/* FIX: Fade + slight slide down transition */}
      <div className="absolute left-0 top-full invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
        <ul className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2 min-w-[260px] flex flex-col gap-1">
          {item.submenu.map((sub) => (
            <li key={sub.name} className="relative group/nested">
              {sub.submenu ? (
                <>
                  <Link href={sub.href} className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-primary-600 transition-colors text-sm font-medium">
                    {sub.name}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  {/* Nested Dropdown 2 */}
                  <div className="absolute left-full top-0 invisible opacity-0 -translate-x-2 group-hover/nested:visible group-hover/nested:opacity-100 group-hover/nested:translate-x-0 transition-all duration-200 pl-2">
                    <ul className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2 min-w-[220px] flex flex-col gap-1">
                      {sub.submenu.map((nestedSub) => (
                        <li key={nestedSub.name}>
                          <Link href={nestedSub.href} className="block px-4 py-2.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-primary-600 transition-colors text-sm font-medium">
                            {nestedSub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link href={sub.href} className="block px-4 py-2.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-primary-600 transition-colors text-sm font-medium">
                  {sub.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};


// ---------------- MOBILE MENU ITEM (ACCORDION) ----------------
const MobileMenuItem = ({ item, closeMenu }: { item: MenuItem, closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  if (!hasSubmenu) {
    return (
      <Link 
        href={item.href} 
        className="block py-3 px-2 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50"
        onClick={closeMenu}
      >
        {item.name}
      </Link>
    );
  }

  // FIX: Dropdown berubah jadi accordion yang expand ke bawah
  return (
    <div className="border-b border-slate-50">
      <button 
        className="flex items-center justify-between w-full py-3 px-2 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.name}
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-600' : ''}`} />
      </button>
      
      {/* Accordion Content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pl-4 pb-2 flex flex-col gap-1">
          {item.submenu!.map((sub) => (
            <MobileSubMenuItem key={sub.name} item={sub} closeMenu={closeMenu} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileSubMenuItem = ({ item, closeMenu }: { item: SubmenuItem & { submenu?: SubmenuItem[] }, closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  if (!hasSubmenu) {
    return (
      <Link 
        href={item.href} 
        className="block py-2.5 px-3 text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors"
        onClick={closeMenu}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div>
      <button 
        className="flex items-center justify-between w-full py-2.5 px-3 text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.name}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-600' : ''}`} />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pl-3 flex flex-col gap-1 border-l-2 border-slate-100 ml-4 mb-2 mt-1">
          {item.submenu!.map((nestedSub) => (
            <Link 
              key={nestedSub.name}
              href={nestedSub.href} 
              className="block py-2 px-3 text-sm text-slate-500 hover:text-primary-600 hover:bg-slate-50 rounded-md transition-colors"
              onClick={closeMenu}
            >
              {nestedSub.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100/50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative z-10">
            <div className={`relative transition-all duration-300 ${isScrolled ? 'h-10 w-7' : 'h-12 w-8'}`}>
              <Image 
                src="/images/logo-banjarnegara.png"
                alt="Logo Kabupaten Banjarnegara"
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-slate-800 transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                BANJARNEGARA
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:block">
                Pemerintah Kabupaten
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex gap-6 text-sm text-slate-600">
              {navLinks.map((link) => (
                <DesktopMenuItem key={link.name} item={link} />
              ))}
            </ul>
            <div className="relative ml-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari..." 
                className="pl-9 pr-4 py-2 rounded-full bg-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 w-48 transition-all focus:bg-white focus:shadow-sm"
              />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-primary-600 rounded-md bg-slate-100 relative z-[60] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[40] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Nav Content */}
      <div 
        className={`lg:hidden fixed top-[72px] inset-x-0 bg-white shadow-xl border-t border-slate-100 z-[50] transition-all duration-300 ease-in-out flex flex-col ${
          mobileMenuOpen ? 'translate-y-0 opacity-100 max-h-[calc(100vh-72px)]' : '-translate-y-4 opacity-0 pointer-events-none max-h-0'
        }`}
      >
        <div className="p-4 overflow-y-auto">
          <div className="relative w-full mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari informasi..." 
              className="w-full pl-9 pr-4 py-3 rounded-lg bg-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white"
            />
          </div>
          <div className="flex flex-col pb-10">
            {navLinks.map((link) => (
              <MobileMenuItem key={link.name} item={link} closeMenu={() => setMobileMenuOpen(false)} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
