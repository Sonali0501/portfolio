import React from 'react';
import { ArrowDown, Code, Cpu, FileIcon, Github, Linkedin, Mail, Phone, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // View resume
  const ViewResume = () => {
    window.open('https://drive.google.com/file/d/1Y_hzH3sQSoNmQXgpkyxNiy2nm9MESrqJ/view?usp=sharing', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute top-20 left-20 text-emerald-400/30 animate-float">
          <Code className="h-8 w-8" />
        </div>
        <div className="absolute top-40 right-32 text-blue-400/30 animate-float-delayed">
          <Terminal className="h-6 w-6" />
        </div>
        <div className="absolute bottom-40 left-32 text-purple-400/30 animate-float-slow">
          <Cpu className="h-10 w-10" />
        </div>
        
        {/* Code Snippets */}
        <div className="absolute top-32 right-20 text-emerald-400/20 font-mono text-sm animate-fade-in-out">
          <div>{"const developer = {"}</div>
          <div className="ml-4">{'name: "Sonali",'}</div>
          <div className="ml-4">{'passion: "coding"'}</div>
          <div>{"};"};</div>
        </div>
        
        <div className="absolute bottom-32 right-40 text-blue-400/20 font-mono text-sm animate-fade-in-out-delayed">
          <div>{"function buildAmazing() {"}</div>
          <div className="ml-4">{'return "innovation";'}</div>
          <div>{"}"}</div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-emerald-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rotate-12 animate-float"></div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-semibold text-cream-100 leading-tight">
              Sonali Nogja
              <span className="block text-emerald-400 text-4xl lg:text-6xl pt-1">Software Developer</span>
            </h1>
            <p className="text-m lg:text-xl text-cream-300 max-w-2xl mx-auto leading-relaxed">
              Crafting reliable, high-performance web solutions with a modern tech stack. Let's build something impactful together.
            </p>
            {/* Typing cursor effect */}
            <span className="inline-block w-0.5 h-6 bg-emerald-400 ml-1 animate-blink"></span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/Sonali0501', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sonali-nogja/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sonali.nogja.08@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+919075196137', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                target='_blank'
                key={label}
                href={href}
                className="p-3 bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-slate-700"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-cream-300 group-hover:text-emerald-400 transition-colors duration-200" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-8 flex justify-center items-center gap-4 flex-wrap">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium"
            >
              <span>Learn More</span>
              <ArrowDown className="h-5 w-5" />
            </button>
            <button
              onClick={ViewResume}
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium"
            >
              <span>View Resume</span>
              <FileIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" onClick={scrollToAbout}>
        <ArrowDown className="h-6 w-6 text-cream-400" />
      </div>
    </section>
  );
};

export default Hero;