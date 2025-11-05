import React from 'react';

const ServiceCard = ({ name, duration, price, description }) => (
  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
    <div className="flex items-baseline justify-between gap-3">
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <div className="text-rose-600 font-semibold">from {price}</div>
    </div>
    <div className="mt-1 text-sm text-gray-500">{duration}</div>
    <p className="mt-3 text-sm text-gray-600">{description}</p>
  </div>
);

const Services = ({ onBook }) => {
  const services = [
    {
      name: 'Full Body Massage',
      duration: '60–90 minutes',
      price: 'IDR 180k',
      description:
        'Head-to-toe relaxation tailored to your comfort level and pressure preference.',
    },
    {
      name: 'Reflexology',
      duration: '45–60 minutes',
      price: 'IDR 120k',
      description:
        'Gentle pressure on reflex points to improve circulation and overall balance.',
    },
    {
      name: 'Signature Treatment',
      duration: '75 minutes',
      price: 'IDR 240k',
      description:
        'Our most-loved blend of techniques for deep relaxation and lasting relief.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Top Services</h2>
            <p className="mt-3 text-gray-600">Clear durations and upfront, family-friendly prices.</p>
          </div>
          <button
            onClick={onBook}
            className="inline-flex items-center justify-center rounded-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 font-medium shadow-lg shadow-rose-600/20 transition self-start"
            aria-label="Book a service"
          >
            Book Now
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
