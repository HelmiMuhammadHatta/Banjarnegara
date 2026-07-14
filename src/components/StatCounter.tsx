"use client";

import { useEffect, useState, useRef } from 'react';
import { Users, Map, Home, Maximize } from 'lucide-react';

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const Counter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    let animationFrame: number;

    const update = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * easeOutExpo(percentage)));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count.toLocaleString('id-ID')}{suffix}</div>;
};

export default function StatCounter() {
  const stats = [
    { label: 'Jumlah Penduduk', value: 896000, icon: Users, suffix: ' Jiwa' },
    { label: 'Jumlah Kecamatan', value: 20, icon: Map, suffix: '' },
    { label: 'Desa / Kelurahan', value: 278, icon: Home, suffix: '' },
    { label: 'Luas Wilayah', value: 1069, icon: Maximize, suffix: ' km²' },
  ];

  return (
    <section className="py-16 bg-primary-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Statistik Daerah</h2>
          <p className="text-primary-100 max-w-2xl mx-auto">Sekilas angka dan data ringkas mengenai wilayah Pemerintah Kabupaten Banjarnegara.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all hover:-translate-y-1 shadow-lg">
                <div className="w-14 h-14 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 flex justify-center tracking-tight">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-primary-100 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-primary-200 mt-8 italic">
          * Data bersifat ilustratif untuk keperluan demo
        </p>
      </div>
    </section>
  );
}
