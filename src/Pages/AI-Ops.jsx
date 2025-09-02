
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Brain, 
  Workflow, 
  Target, 
  Lightbulb,
  ArrowRight,
  Sparkles,
  Bot,
  Cpu
} from 'lucide-react';

export default function AIOps() {
  const visionPoints = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Cognitive Operations",
      description: "AI systems that think, learn, and adapt like human experts",
      timeline: "2024-2025"
    },
    {
      icon: <Workflow className="h-10 w-10" />,
      title: "Self-Healing Infrastructure",
      description: "Systems that automatically detect, diagnose, and resolve issues",
      timeline: "2025-2026"
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Predictive Optimization",
      description: "Anticipate and prevent operational challenges before they occur",
      timeline: "2026-2027"
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Autonomous Decision Making",
      description: "AI that makes strategic operational decisions with human oversight",
      timeline: "2027+"
    }
  ];

  const currentCapabilities = [
    "Machine Learning Process Optimization",
    "Intelligent Resource Allocation",
    "Automated Incident Response",
    "Predictive Maintenance Scheduling",
    "Real-time Performance Analytics",
    "Smart Cost Optimization"
  ];

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-8">
              <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-light tracking-wide">The Future of Operations</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter text-white mb-8 leading-tight">
              AI-Powered <span className="text-gradient">Operations</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
              Explore our vision for the future where artificial intelligence doesn't just support operations—it transforms them entirely
            </p>
          </div>
        </div>
      </section>

      {/* Current AI Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-white mb-8">Current AI Capabilities</h2>
              <p className="text-lg text-slate-300 font-light mb-8 leading-relaxed">
                Today's Opsygen platform already harnesses the power of AI to deliver measurable improvements in operational efficiency.
              </p>
              
              <div className="space-y-4">
                {currentCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-purple-400 rounded-full mr-4"></div>
                    <span className="text-slate-300 font-light">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8">
                <div className="flex items-center justify-center h-64">
                  <div className="relative">
                    <Bot className="h-32 w-32 text-purple-400" />
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-white mb-16 text-center">The Road Ahead</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-medium text-white">{point.title}</h3>
                      <span className="text-sm text-purple-300 font-light">{point.timeline}</span>
                    </div>
                    <p className="text-slate-300 font-light leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Commitment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-3xl p-12">
            <Cpu className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-light text-white mb-6">
              Pioneering the Future
            </h2>
            <p className="text-lg text-slate-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Our AI research team is constantly pushing the boundaries of what's possible in operational intelligence. 
              We're not just building tools—we're creating the foundation for tomorrow's autonomous enterprises.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center px-10 py-4 accent-gradient text-white font-medium rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Join the Innovation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
