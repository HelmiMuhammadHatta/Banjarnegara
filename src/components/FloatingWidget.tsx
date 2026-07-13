"use client";

import { useState } from 'react';
import { MessageCircle, HeadphonesIcon, X } from 'lucide-react';
import Link from 'next/link';

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl border border-slate-100 p-2 flex flex-col gap-2 mb-2 animate-in slide-in-from-bottom-5">
          <Link 
            href="https://lapor.go.id" 
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-md transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
              <HeadphonesIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-800">Layanan Aduan</span>
              <span className="text-xs text-slate-500">SP4N LAPOR!</span>
            </div>
          </Link>
          <hr className="border-slate-100" />
          <Link 
            href="https://wa.me/6281234567890" 
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-md transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-800">Live Chat</span>
              <span className="text-xs text-slate-500">Hubungi Kami</span>
            </div>
          </Link>
        </div>
      )}

      {/* Toggle Button - FIX: Proporsional dan Collapsible, tidak menutupi konten (Point C.9 & C.8) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-all hover:scale-105"
        aria-label="Toggle Bantuan"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
