
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    const globeScript = document.createElement('script');
    globeScript.type = 'module';
    globeScript.textContent = `
      import createGlobe from 'https://cdn.skypack.dev/cobe';

      let phi = 0;
      let canvas = document.getElementById("cobe");

      if (canvas && !canvas.getAttribute('data-globe-initialized')) {
        canvas.setAttribute('data-globe-initialized', 'true');
        
        const globe = createGlobe(canvas, {
          devicePixelRatio: 2,
          width: 800,
          height: 800,
          phi: 0,
          theta: 0,
          dark: 1,
          diffuse: 1.2,
          scale: 1,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.2, 0.3, 0.8],
          markerColor: [0.6, 0.4, 1],
          glowColor: [0.3, 0.3, 1],
          offset: [0, 0],
          markers: [
            { location: [37.7595, -122.4367], size: 0.03 },
            { location: [40.7128, -74.006], size: 0.1 },
            { location: [51.5074, -0.1278], size: 0.05 },
            { location: [35.6762, 139.6503], size: 0.05 },
            { location: [22.3193, 114.1694], size: 0.03 },
            { location: [-33.8688, 151.2093], size: 0.03 },
          ],
          onRender: (state) => {
            state.phi = phi;
            phi += 0.003;
          },
        });
      }
    `;
    
    document.body.appendChild(globeScript);

    return () => {
      const scripts = document.querySelectorAll('script[type="module"]');
      scripts.forEach(s => {
        if (s.textContent.includes('createGlobe')) {
          s.remove();
        }
      });
      const canvas = document.getElementById("cobe");
      if (canvas) {
        canvas.removeAttribute('data-globe-initialized');
      }
    };
  }, []);

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Deploy and scale operations in minutes, not months",
      color: "cyan"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Secure foundations for every platform — encrypted, compliant, and resilient.",
      color: "green"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Scale",
      description: "Operate seamlessly across multiple regions and markets",
      color: "blue"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Predictive Analytics",
      description: "AI-powered insights that drive strategic decisions",
      color: "purple"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter leading-none">
                  <span className="text-gradient">Oxygen for Cloud Operations</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light mt-6 leading-relaxed max-w-2xl">
                  Managed applications and expert services on Microsoft Azure — faster, simpler, and smarter for organizations of any size.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={createPageUrl('Products')}
                  className="inline-flex items-center justify-center px-8 py-4 accent-gradient text-white font-medium rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to={createPageUrl('AI-Ops')}
                  className="inline-flex items-center justify-center px-8 py-4 glass-effect text-white font-light rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  View AI Vision
                </Link>
              </div>
            </div>

            {/* Globe */}
            <div className="relative">
              <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <canvas
                  id="cobe"
                  style={{ width: '100%', height: '100%' }}
                  width="800"
                  height="800"
                  className="relative z-10"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Why Choose <span className="text-gradient">Opsygen</span>
            </h2>
            <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto">
              Built for enterprises that demand excellence in operational efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`
                  rounded-2xl p-8 transition-all duration-300 group
                  bg-slate-900/50 backdrop-blur-sm
                  border
                  ${
                    {
                      cyan: 'border-cyan-500/20 hover:border-cyan-500/50',
                      green: 'border-green-500/20 hover:border-green-500/50',
                      blue: 'border-blue-500/20 hover:border-blue-500/50',
                      purple: 'border-purple-500/20 hover:border-purple-500/50',
                    }[feature.color]
                  }
                  hover:bg-slate-900/70
                  hover:-translate-y-2
                  hover:shadow-2xl
                  ${
                    {
                      cyan: 'hover:shadow-cyan-500/10',
                      green: 'hover:shadow-green-500/10',
                      blue: 'hover:shadow-blue-500/10',
                      purple: 'hover:shadow-purple-500/10',
                    }[feature.color]
                  }
                `}
              >
                <div className={`mb-4 group-hover:scale-110 transition-transform ${
                  {
                    cyan: 'text-cyan-400',
                    green: 'text-green-400',
                    blue: 'text-blue-400',
                    purple: 'text-purple-400',
                  }[feature.color]
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Join leading enterprises already revolutionizing their operations with Opsygen
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center px-10 py-4 accent-gradient text-white font-medium rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
