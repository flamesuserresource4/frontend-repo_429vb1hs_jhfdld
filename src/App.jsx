import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import BranchLocator from './components/BranchLocator';
import ArticleCategories from './components/ArticleCategories';

function App() {
  const onlineBookingUrl = 'https://example.com/book';
  const whatsappNumber = '6281234567890';

  const handleBookOnline = () => {
    window.open(onlineBookingUrl, '_blank');
  };

  const handleBookWhatsApp = () => {
    const msg = encodeURIComponent('Hello! I would like to book a massage.');
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500" />
            <span className="font-semibold">Family Massage</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#articles" className="hover:text-gray-900">Articles</a>
            <a href="#branches" className="hover:text-gray-900">Branches</a>
          </nav>
          <button
            onClick={handleBookOnline}
            className="ml-4 inline-flex items-center justify-center rounded-full bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 text-sm font-medium shadow-sm"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Hero with Spline mascot */}
      <Hero onBookOnline={handleBookOnline} onBookWhatsApp={handleBookWhatsApp} />

      {/* Services */}
      <div id="services">
        <Services onBook={handleBookOnline} />
      </div>

      {/* Article categories with subcategories */}
      <ArticleCategories />

      {/* Branch Selector + Map */}
      <div id="branches">
        <BranchLocator onBookOnline={handleBookOnline} onBookWhatsApp={handleBookWhatsApp} />
      </div>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-rose-600 to-rose-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready for your next reset?</h2>
          <p className="mt-3 text-rose-50 max-w-2xl mx-auto">
            Book your session in seconds. You deserve comfort, care, and a peaceful break.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleBookOnline}
              className="inline-flex items-center justify-center rounded-full bg-white text-rose-700 hover:bg-rose-50 px-6 py-3 font-medium"
            >
              Book Now
            </button>
            <button
              onClick={handleBookWhatsApp}
              className="inline-flex items-center justify-center rounded-full bg-rose-700/30 ring-1 ring-white/30 hover:bg-rose-700/40 text-white px-6 py-3 font-medium"
            >
              Book via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500" />
            <span className="font-semibold">Family Massage</span>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Family Massage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
