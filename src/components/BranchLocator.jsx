import React, { useMemo, useState } from 'react';
import { MapPin, Phone, Calendar } from 'lucide-react';

const branches = [
  {
    city: 'Singapore',
    name: 'Orchard Family Wellness',
    address: '123 Orchard Rd, Singapore 238888',
    map:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.153320680685!2d103.828!3d1.305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da199137fcb6d3%3A0x7a0dd1c9d2a3f2e!2sOrchard%20Rd!5e0!3m2!1sen!2ssg!4v1699999999999',
    onlineUrl: 'https://example.com/booking?branch=orchard',
    whatsapp: '6588001234',
  },
  {
    city: 'Kuala Lumpur',
    name: 'Bangsar Family Wellness',
    address: '45 Jalan Telawi, Bangsar, 59100 KL',
    map:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.303665457399!2d101.668!3d3.128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b1337b9b2f1%3A0x6b91e72e7c15c8c5!2sBangsar!5e0!3m2!1sen!2smy!4v1699999999999',
    onlineUrl: 'https://example.com/booking?branch=bangsar',
    whatsapp: '60123456789',
  },
];

function openOnline(url) {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

function openWhatsApp(number, message) {
  const text = encodeURIComponent(message);
  const url = `https://wa.me/${number}?text=${text}`;
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

export default function BranchLocator() {
  const [city, setCity] = useState(branches[0].city);
  const branch = useMemo(() => branches.find((b) => b.city === city) || branches[0], [city]);

  return (
    <section id="branches" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Find a Branch</h2>
          <p className="mt-2 max-w-2xl text-gray-600">Select your city to view address, map, and booking options.</p>
        </div>
        <div>
          <label className="sr-only" htmlFor="city">City</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            {branches.map((b) => (
              <option key={b.city} value={b.city}>{b.city}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{branch.name}</h3>
                <p className="mt-1 flex items-center gap-2 text-gray-700"><MapPin className="h-4 w-4 text-emerald-600" /> {branch.address}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button onClick={() => openOnline(branch.onlineUrl)} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700">
                <Calendar className="h-5 w-5" /> Book Online
              </button>
              <button
                onClick={() => openWhatsApp(branch.whatsapp, `Hello! I want to book at ${branch.name}.`)}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-emerald-700 shadow ring-1 ring-emerald-200 hover:bg-emerald-50"
              >
                <Phone className="h-5 w-5" /> WhatsApp Branch
              </button>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <iframe
              title={`Map of ${branch.name}`}
              src={branch.map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {branches.map((b) => (
            <div key={b.city} className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-gray-200">
              <h4 className="font-semibold text-gray-900">{b.name}</h4>
              <p className="mt-1 text-sm text-gray-700">{b.address}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button onClick={() => openOnline(b.onlineUrl)} className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700">Book</button>
                <button onClick={() => openWhatsApp(b.whatsapp, `Hi! Booking inquiry for ${b.name}.`)} className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50">WhatsApp</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
