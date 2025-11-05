import React, { useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const topics = [
  {
    key: 'wellness',
    title: 'Wellness Guides',
    color: 'from-emerald-500 to-teal-600',
    subcategories: ['Stress Relief', 'Sleep', 'Mindfulness', 'Self-care'],
    featured: {
      title: 'Daily rituals to unwind in 10 minutes',
      excerpt: 'Short, family-friendly practices to reset your body and mind.',
      image:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop',
      url: '#',
    },
  },
  {
    key: 'family',
    title: 'Family & Kids',
    color: 'from-pink-500 to-rose-600',
    subcategories: ['Prenatal', 'Postnatal', 'Kids Massage', 'Bonding'],
    featured: {
      title: 'Safe massage tips for kids at home',
      excerpt: 'Gentle, expert-approved techniques to comfort little ones.',
      image:
        'https://images.unsplash.com/photo-1595433707802-6b2626ef057a?q=80&w=1600&auto=format&fit=crop',
      url: '#',
    },
  },
  {
    key: 'recovery',
    title: 'Recovery & Performance',
    color: 'from-indigo-500 to-violet-600',
    subcategories: ['Sports', 'Mobility', 'Pain Relief', 'Prehab'],
    featured: {
      title: 'Pre-race recovery checklist',
      excerpt: 'Reduce soreness and bounce back faster with these steps.',
      image:
        'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
      url: '#',
    },
  },
];

export default function ArticleCategories() {
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [activeSub, setActiveSub] = useState(topics[0].subcategories[0]);

  const headline = useMemo(() => {
    return `${activeTopic.title}: ${activeSub}`;
  }, [activeTopic, activeSub]);

  return (
    <section id="articles" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Articles & Guides</h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Explore expert advice for every stage of family life—from pregnancy to performance.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t.key}
              onClick={() => {
                setActiveTopic(t);
                setActiveSub(t.subcategories[0]);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium shadow ring-1 transition ${
                activeTopic.key === t.key
                  ? 'bg-gray-900 text-white ring-gray-900'
                  : 'bg-white text-gray-700 ring-gray-200 hover:bg-gray-50'
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {activeTopic.subcategories.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSub(s)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  activeSub === s
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="rounded-2xl bg-white/70 p-6 shadow-lg ring-1 ring-gray-200 backdrop-blur">
            <div className={`inline-block rounded-full bg-gradient-to-r ${activeTopic.color} px-3 py-1 text-xs font-semibold text-white shadow`}>Featured</div>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">{headline}</h3>
            <p className="mt-1 text-gray-600">
              Curated reads handpicked by our therapists to help you thrive.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <article key={i} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={activeTopic.featured.image}
                      alt="Featured"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="line-clamp-2 font-semibold text-gray-900">
                      {activeTopic.featured.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                      {activeTopic.featured.excerpt}
                    </p>
                    <button className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:underline">
                      Read more <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="md:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-white to-emerald-50 p-6 shadow-lg ring-1 ring-emerald-100">
              <h4 className="text-lg font-semibold text-gray-900">Why read our guides?</h4>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Therapist-reviewed advice</li>
                <li>Family-friendly and practical</li>
                <li>Grounded in recovery science</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200">
              <h4 className="text-lg font-semibold text-gray-900">Featured topic</h4>
              <p className="mt-1 text-sm text-gray-600">
                {activeTopic.title}
              </p>
              <div className={`mt-3 h-2 w-full rounded-full bg-gradient-to-r ${activeTopic.color}`} />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
