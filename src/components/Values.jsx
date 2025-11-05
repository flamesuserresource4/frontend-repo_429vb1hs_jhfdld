import React from 'react';

const ValueCard = ({ title, description }) => (
  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
  </div>
);

const Values = () => {
  const items = [
    {
      title: 'Certified Therapists',
      description:
        'Professionals trained in family-safe techniques for every age and body.',
    },
    {
      title: 'Family-Friendly Environment',
      description:
        'Clean, calming rooms with thoughtful amenities for parents and kids.',
    },
    {
      title: 'Transparent Pricing',
      description:
        'Clear, upfront rates with no surprises. Simple choices for every budget.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            What Families Love About Us
          </h2>
          <p className="mt-3 text-gray-600">
            Comfort and care you can count on, every single visit.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
