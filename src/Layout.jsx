
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: 'Home', current: currentPageName === 'Home' },
    { name: 'Products & Services', path: 'Products', current: currentPageName === 'Products' },
    { name: 'AI-Ops Vision', path: 'AI-Ops', current: currentPageName === 'AI-Ops' },
    { name: 'About', path: 'About', current: currentPageName === 'About' },
    { name: 'Contact', path: 'Contact', current: currentPageName === 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <style>{`
        :root {
          --primary-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%);
          --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
          --text-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .text-gradient {
          background: var(--text-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .accent-gradient {
          background: var(--accent-gradient);
        }
      `}</style>
      
      {/* Navigation */}
      <nav className="relative z-50">
        <div className="glass-effect">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              {/* Logo */}
              <Link to={createPageUrl('Home')} className="flex items-center group">
                <div className="h-10 w-10 accent-gradient rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <span className="text-2xl font-light text-white tracking-tight">Opsygen</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.path)}
                    className={`text-sm font-light tracking-wide transition-all duration-300 hover:text-purple-300 ${
                      item.current ? 'text-purple-300' : 'text-slate-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl('Contact')}
                  className="accent-gradient text-white px-6 py-2 rounded-full text-sm font-light tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg glass-effect text-white hover:bg-white/10 transition-all"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.path)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-base font-light transition-all ${
                    item.current ? 'text-purple-300' : 'text-slate-300 hover:text-purple-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-effect border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 accent-gradient rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <span className="text-xl font-light text-white">Opsygen Ltd.</span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed max-w-md">
                Transforming operations through intelligent automation and next-generation AI solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Solutions</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-purple-300 transition-colors text-sm">AI Operations</a>
                <a href="#" className="block text-slate-400 hover:text-purple-300 transition-colors text-sm">Process Automation</a>
                <a href="#" className="block text-slate-400 hover:text-purple-300 transition-colors text-sm">Data Intelligence</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <div className="space-y-2">
                <Link to={createPageUrl('About')} className="block text-slate-400 hover:text-purple-300 transition-colors text-sm">About Us</Link>
                <Link to={createPageUrl('Contact')} className="block text-slate-400 hover:text-purple-300 transition-colors text-sm">Contact</Link>
                <a href="#" className="block text-slate-400 hover:text-purple-300 transition-colors text-sm">Careers</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm font-light">
              © 2025 Opsygen Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
