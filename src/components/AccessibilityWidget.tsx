"use client";

import { useState, useEffect } from 'react';
import { Accessibility, Type, Contrast, X } from 'lucide-react';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<number>(16);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const savedFontSize = localStorage.getItem('a11y_fontSize');
    const savedContrast = localStorage.getItem('a11y_contrast');
    
    if (savedFontSize) {
      const size = parseInt(savedFontSize);
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}px`;
    }
    
    if (savedContrast === 'true') {
      setHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const changeFontSize = (delta: number) => {
    let newSize = fontSize + delta;
    if (newSize < 12) newSize = 12;
    if (newSize > 22) newSize = 22;
    
    setFontSize(newSize);
    localStorage.setItem('a11y_fontSize', newSize.toString());
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const toggleContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('a11y_contrast', newValue.toString());
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-4 flex flex-col gap-4 mb-2 animate-in slide-in-from-bottom-5 w-64">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-primary-600" />
              Aksesibilitas
            </h4>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Type className="w-4 h-4" /> Ukuran Teks
            </span>
            <div className="flex bg-slate-100 rounded-md p-1 gap-1">
              <button 
                onClick={() => changeFontSize(-2)}
                className="flex-1 py-1.5 text-sm font-bold bg-white shadow-sm hover:bg-slate-50 border border-slate-200 rounded transition-all"
              >
                A-
              </button>
              <button 
                onClick={() => { setFontSize(16); document.documentElement.style.fontSize = '16px'; localStorage.setItem('a11y_fontSize', '16'); }}
                className="flex-1 py-1.5 text-sm font-bold bg-white shadow-sm hover:bg-slate-50 border border-slate-200 rounded transition-all"
              >
                A
              </button>
              <button 
                onClick={() => changeFontSize(2)}
                className="flex-1 py-1.5 text-sm font-bold bg-white shadow-sm hover:bg-slate-50 border border-slate-200 rounded transition-all"
              >
                A+
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Contrast className="w-4 h-4" /> Kontras Tampilan
            </span>
            <button 
              onClick={toggleContrast}
              className={`w-full py-2.5 rounded-md font-bold text-sm transition-colors border ${
                highContrast 
                  ? 'bg-primary-600 text-white border-primary-700 hover:bg-primary-700' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {highContrast ? 'Kontras Tinggi Aktif' : 'Aktifkan Kontras Tinggi'}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-slate-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-900 transition-all hover:scale-105"
        aria-label="Aksesibilitas"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Accessibility className="w-6 h-6" />}
      </button>
    </div>
  );
}
