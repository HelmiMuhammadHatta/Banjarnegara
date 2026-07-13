import Link from 'next/link';
import { ChevronRight, Home, LayoutTemplate } from 'lucide-react';

export default function CatchAllPage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  
  // Membangun breadcrumb dari array slug
  const breadcrumbs = slug.map((segment, index) => {
    // Ubah text dari kebab-case ke Title Case
    const title = segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const href = '/' + slug.slice(0, index + 1).join('/');
    return { title, href };
  });

  const pageTitle = breadcrumbs[breadcrumbs.length - 1].title;

  return (
    <div className="bg-slate-50 min-h-[70vh]">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-8 md:py-12 mt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-primary-600 transition-colors flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  Beranda
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href}>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-1" />
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-slate-800 font-medium">{crumb.title}</span>
                    ) : (
                      <Link href={crumb.href} className="hover:text-primary-600 transition-colors">
                        {crumb.title}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">{pageTitle}</h1>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-16 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-6">
            <LayoutTemplate className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Halaman {pageTitle}</h2>
          <p className="text-slate-500 max-w-lg mb-8 leading-relaxed">
            Ini adalah halaman <i>placeholder</i> untuk mendemonstrasikan navigasi submenu (seperti dropdown & accordion). 
            Pada implementasi aslinya, konten halaman ini akan dinamis dan terhubung dengan backend / CMS.
          </p>
          <Link 
            href="/" 
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
