import React from 'react';
import Spline from '@splinetool/react-spline';
import { Calendar, Phone } from 'lucide-react';

const onlineBookingUrl = 'https://example.com/booking';
const whatsappNumber = '1234567890';

function openOnlineBooking() {
  if (typeof window !== 'undefined') {
    window.open(onlineBookingUrl, '_blank', 'noopener,noreferrer');
  }
}

function openWhatsApp(message) {
  const text = encodeURIComponent(message);
  const url = `https://wa.me/${whatsappNumber}?text=${text}`;
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6n1L6nXkGz2G7C8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24 sm:py-28 md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-200 backdrop-blur">
          Family Massage • Wellness for everyone
        </span>
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Restore, relax, and reconnect
          <span className="block bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">with our family-friendly massage</span>
        </h1>
        <p className="max-w-2xl text-base text-gray-600 sm:text-lg">
          Professional therapists, warm spaces, and tailored treatments for parents, kids, and athletes. Book online or message us to plan your perfect session.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button onClick={openOnlineBooking} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
            <Calendar className="h-5 w-5" /> Book Online
          </button>
          <button onClick={() => openWhatsApp('Hello! I would like to book a massage.')} className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-emerald-700 shadow ring-1 ring-emerald-200 transition hover:bg-emerald-50">
            <Phone className="h-5 w-5" /> WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  );
}
