import React from 'react';
import { Clock, Check, Calendar } from 'lucide-react';

const services = [
  {
    name: 'Family Relaxation Massage',
    duration: '60 min',
    price: '$65',
    description: 'Gentle, full-body session designed for parents and kids to unwind together.',
    url: 'https://example.com/booking?family',
    highlights: ['Calming aromatherapy', 'Kid-safe techniques', 'Private room'],
  },
  {
    name: 'Prenatal & Postnatal Care',
    duration: '75 min',
    price: '$85',
    description: 'Supportive relief tailored for expecting and new mothers with certified therapists.',
    url: 'https://example.com/booking?prenatal',
    highlights: ['Lower-back relief', 'Swelling reduction', 'Cushioned side-lying'],
  },
  {
    name: 'Sports Recovery Massage',
    duration: '60 min',
    price: '$79',
    description: 'Targeted recovery for athletes focusing on mobility, soreness, and performance.',
    url: 'https://example.com/booking?sports',
    highlights: ['Assisted stretching', 'Trigger point care', 'Mobility screen'],
  },
];

function book(url) {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
        <p className="mt-2 max-w-2xl text-gray-600">Thoughtfully designed treatments for relaxation, recovery, and every family moment.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.name} className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-5">
              <h3 className="text-xl font-semibold text-gray-900">{s.name}</h3>
              <div className="mt-2 flex items-center gap-3 text-sm text-gray-700">
                <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {s.duration}</span>
                <span className="font-semibold text-emerald-700">{s.price}</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-gray-700">{s.description}</p>
              <ul className="mt-4 space-y-2">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-emerald-600" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button onClick={() => book(s.url)} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow hover:bg-emerald-700">
                  <Calendar className="h-5 w-5" /> Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
