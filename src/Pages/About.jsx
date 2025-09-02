
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Users, 
  Award, 
  Globe2, 
  Rocket,
  Heart,
  Target,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const stats = [
    { number: "2019", label: "Founded" },
    { number: "150+", label: "Team Members" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Platform Uptime" }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Human-Centered Innovation",
      description: "Technology should amplify human potential, not replace it"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Operational Excellence",
      description: "Every solution we build meets the highest standards of reliability"
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "Global Impact",
      description: "Creating solutions that work for organizations worldwide"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former Google AI, Stanford PhD in Computer Science",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      background: "Ex-Amazon Principal Engineer, MIT Computer Science",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of AI Research",
      background: "Former Microsoft Research, PhD in Machine Learning",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight">
            About <span className="text-gradient">Opsygen</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
            We're building the future of enterprise operations through intelligent automation and AI-driven insights
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-light text-white mb-2 tracking-tight">{stat.number}</div>
                <div className="text-slate-400 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-white mb-8">Our Mission</h2>
              <p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
                At Opsygen, we believe that the most powerful operations are those that seamlessly blend human intelligence with artificial intelligence. Our mission is to create technology that doesn't just automate—it elevates.
              </p>
              <p className="text-lg text-slate-300 font-light leading-relaxed">
                Founded by a team of AI researchers and enterprise technology veterans, we're committed to building solutions that solve real-world operational challenges while maintaining the human element that makes businesses truly successful.
              </p>
            </div>
            
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8">
                <div className="flex items-center justify-center h-64">
                  <Rocket className="h-32 w-32 text-purple-400" />
                  <div className="absolute inset-0 bg-purple-500/10 rounded-2xl blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-white mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-purple-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4">{value.title}</h3>
                <p className="text-slate-300 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-white mb-12 text-center">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{member.name}</h3>
                <p className="text-purple-300 font-light mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm font-light">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-3xl p-12">
            <Users className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-light text-white mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Be part of the revolution in enterprise operations. Let's build the future together.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center px-10 py-4 accent-gradient text-white font-medium rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
