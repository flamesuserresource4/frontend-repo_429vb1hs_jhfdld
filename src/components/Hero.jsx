import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = ({ onBookOnline, onBookWhatsApp }) => {
  return (
    <section className="relative min-h-[72vh] md:min-h-[80vh] flex items-center overflow-hidden">
      {/* 3D scene background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Soft gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-rose-100/40" />

      {/* Foreground content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="backdrop-blur-[2px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-rose-600" />
              Interactive Mascot · Follows your cursor
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Family Massage & Wellness
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-xl">
              A playful, modern space where comfort meets care. Certified therapists, calm rooms, and transparent pricing for every family.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onBookOnline}
                className="inline-flex items-center justify-center rounded-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 font-medium shadow-lg shadow-rose-600/20 transition"
                aria-label="Book massage online"
              >
                Book Now
              </button>
              <button
                onClick={onBookWhatsApp}
                className="inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-200 hover:bg-gray-50 text-gray-900 px-6 py-3 font-medium"
                aria-label="Book via WhatsApp"
              >
                Book via WhatsApp
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              Open daily • Family-friendly • Hygienic & safe
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
