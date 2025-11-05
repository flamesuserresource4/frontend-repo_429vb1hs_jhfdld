import React, { useMemo, useState } from 'react';

const branchesData = [
  {
    city: 'Yogyakarta',
    address: 'Jl. Malioboro No. 21, Yogyakarta',
    hours: 'Mon–Sun, 10:00 – 22:00',
    phone: '+62 812-3456-7890',
    whatsapp: '6281234567890',
    bookingUrl: 'https://example.com/book/yogyakarta',
    mapQuery: 'Jl.+Malioboro+No.+21,+Yogyakarta',
  },
  {
    city: 'Pati',
    address: 'Jl. Raya Pati No. 8, Pati',
    hours: 'Mon–Sun, 10:00 – 22:00',
    phone: '+62 811-2233-4455',
    whatsapp: '6281122334455',
    bookingUrl: 'https://example.com/book/pati',
    mapQuery: 'Jl.+Raya+Pati+No.+8,+Pati',
  },
  {
    city: 'Semarang',
    address: 'Jl. Pandanaran No. 88, Semarang',
    hours: 'Mon–Sun, 10:00 – 22:00',
    phone: '+62 813-9988-7766',
    whatsapp: '6281399887766',
    bookingUrl: 'https://example.com/book/semarang',
    mapQuery: 'Jl.+Pandanaran+No.+88,+Semarang',
  },
];

const BranchLocator = ({ onBookOnline, onBookWhatsApp }) => {
  const [selectedCity, setSelectedCity] = useState(branchesData[0].city);

  const selected = useMemo(
    () => branchesData.find((b) => b.city === selectedCity) ?? branchesData[0],
    [selectedCity]
  );

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello! I would like to book a massage at the ${selected.city} branch.`
    );
    window.open(`https://wa.me/${selected.whatsapp}?text=${message}`, '_blank');
  };

  const openOnlineBooking = () => {
    window.open(selected.bookingUrl, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Find Your Nearest Branch
            </h2>
            <p className="mt-3 text-gray-600">Select a city to see address, hours, and contact.</p>
          </div>
          <div className="flex gap-3">
            <select
              className="w-56 rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              aria-label="Select a city"
            >
              {branchesData.map((b) => (
                <option key={b.city} value={b.city}>
                  {b.city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{selected.city} Branch</h3>
                <p className="mt-1 text-sm text-gray-600">{selected.address}</p>
                <p className="mt-1 text-sm text-gray-600">Hours: {selected.hours}</p>
                <p className="mt-1 text-sm text-gray-600">Phone: {selected.phone}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={openOnlineBooking}
                className="inline-flex items-center justify-center rounded-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 font-medium shadow-lg shadow-rose-600/20 transition"
              >
                Book This Branch
              </button>
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-200 hover:bg-gray-50 text-gray-900 px-6 py-3 font-medium"
              >
                WhatsApp Booking
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm min-h-[320px] bg-gray-100">
            <iframe
              title={`Map of ${selected.city}`}
              loading="lazy"
              className="w-full h-[340px] md:h-[420px]"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${selected.mapQuery}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchLocator;
