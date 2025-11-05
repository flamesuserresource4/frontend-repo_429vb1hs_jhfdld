import React from 'react';
import { Heart, Menu } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import ArticleCategories from './components/ArticleCategories';
import BranchLocator from './components/BranchLocator';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow">
              <Heart className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold">Family Massage</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-emerald-700">Services</a>
            <a href="#articles" className="text-sm font-medium text-gray-700 hover:text-emerald-700">Articles</a>
            <a href="#branches" className="text-sm font-medium text-gray-700 hover:text-emerald-700">Branches</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm md:hidden">
            <Menu className="h-4 w-4" /> Menu
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <ArticleCategories />
        <BranchLocator />
      </main>

      <footer className="mt-20 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Family Massage. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#services" className="hover:text-emerald-700">Services</a>
              <a href="#articles" className="hover:text-emerald-700">Articles</a>
              <a href="#branches" className="hover:text-emerald-700">Branches</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
