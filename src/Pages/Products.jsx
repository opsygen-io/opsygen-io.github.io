
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Cpu, 
  BarChart3, 
  Network, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "AI Process Automation",
      description: "Intelligent automation that learns and adapts to your workflows",
      features: ["Smart workflow optimization", "Real-time process monitoring", "Predictive maintenance", "Custom rule engines"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Advanced Analytics Suite",
      description: "Deep insights and forecasting powered by machine learning",
      features: ["Predictive modeling", "Real-time dashboards", "Custom reporting", "Data visualization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: "Unified Operations Platform",
      description: "Centralized command center for all your operational needs",
      features: ["Multi-system integration", "Unified monitoring", "Alert management", "Resource optimization"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const services = [
    {
      title: "Implementation & Migration",
      description: "Seamless transition to Opsygen with zero downtime",
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: "Custom Integration",
      description: "Connect with your existing systems and workflows",
      icon: <Network className="h-8 w-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock expert support for mission-critical operations",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "Training & Enablement",
      description: "Comprehensive training programs for your teams",
      icon: <Globe className="h-8 w-8" />
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Products & <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to revolutionize how enterprises operate in the digital age
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-white mb-12 text-center">Core Products</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{product.icon}</div>
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-4">{product.title}</h3>
                <p className="text-slate-300 font-light mb-6 leading-relaxed">{product.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-400 text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={createPageUrl('Contact')}
                  className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-white mb-12 text-center">Professional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex items-start space-x-4">
                <div className="text-purple-400 mt-1">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 font-light leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-3xl p-12">
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Let's discuss how Opsygen can transform your operations
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center px-10 py-4 accent-gradient text-white font-medium rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
