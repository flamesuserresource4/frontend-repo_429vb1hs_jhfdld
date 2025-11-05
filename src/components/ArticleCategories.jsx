import React, { useMemo, useState } from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const data = [
  {
    category: 'Wellness Guides',
    description: 'Simple, science-backed tips to feel better every day.',
    color: 'from-rose-500 to-pink-500',
    subs: [
      { title: 'Massage for Busy Parents', count: 8 },
      { title: 'Stress Relief at Home', count: 12 },
      { title: 'Understanding Muscle Tension', count: 5 },
    ],
  },
  {
    category: 'Family & Kids',
    description: 'Gentle care and routines that work for the whole family.',
    color: 'from-sky-500 to-cyan-500',
    subs: [
      { title: 'First Massage for Kids', count: 6 },
      { title: 'Prenatal & Postnatal Care', count: 7 },
      { title: 'Soothing Bedtime Routines', count: 9 },
    ],
  },
  {
    category: 'Recovery & Performance',
    description: 'Move better, recover faster, and feel stronger.',
    color: 'from-violet-500 to-indigo-500',
    subs: [
      { title: 'Desk Posture Fixes', count: 10 },
      { title: 'After-Workout Recovery', count: 11 },
      { title: 'Neck & Back Care', count: 8 },
    ],
  },
];

const Pill = ({ label, count }) => (
  <button
    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-700 hover:border-gray-300 hover:bg-white transition"
    aria-label={`Open subcategory ${label}`}
  >
    <span>{label}</span>
    <span className="text-xs text-gray-500">{count}</span>
    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
  </button>
);

const CategoryCard = ({ category, description, color, subs, onSelect }) => (
  <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />
    <div className="relative p-6">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${color}`} />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {subs.map((s) => (
          <div key={s.title} onClick={() => onSelect(category, s.title)}>
            <Pill label={s.title} count={s.count} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ArticleCategories = () => {
  const [active, setActive] = useState(null);
  const headline = useMemo(() => {
    if (!active) return 'Explore articles by topic';
    return `${active.category} · ${active.sub}`;
  }, [active]);

  return (
    <section id="articles" className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              {headline}
            </h2>
            <p className="mt-3 text-gray-600">
              Browse subcategories to find guides, tips, and expert answers tailored to your needs.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 text-gray-700 shadow-sm">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm">Knowledge Hub</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((c) => (
            <CategoryCard
              key={c.category}
              {...c}
              onSelect={(category, sub) => setActive({ category, sub })}
            />
          ))}
        </div>

        {active && (
          <div className="mt-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Featured in {active.sub}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Curated reads to get you started. New articles added regularly.
                </p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="text-sm text-gray-500 hover:text-gray-700"
                aria-label="Clear selection"
              >
                Clear
              </button>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="group rounded-2xl border border-gray-100 p-4 hover:shadow-sm transition"
                >
                  <div className="text-xs text-gray-500">{active.category} · {active.sub}</div>
                  <div className="mt-1 font-medium text-gray-900 group-hover:text-rose-600">
                    How to get the most from your session ({i})
                  </div>
                  <div className="mt-2 text-sm text-gray-600 line-clamp-2">
                    Practical steps you can try today to relieve tension, calm the body, and support recovery.
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleCategories;
