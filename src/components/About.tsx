import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-16 lg:py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image with Thinking Cloud */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Thinking Cloud */}
            <div className="absolute -top-20 lg:-top-16 -right-2 lg:-right-4 z-0">
              <div className="relative bg-white rounded-3xl px-6 py-4 shadow-lg max-w-[200px] lg:max-w-xs">
                <p className="text-slate-800 text-xs lg:text-sm font-medium italic">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
                <div className="text-right text-[10px] lg:text-xs text-slate-600 mt-1">
                  - Cory House
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl">
                <img
                  src="./photo.jpg"
                  alt="Sonali Nogja"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 -right-4 w-6 h-6 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-semibold text-cream-100">
                About Me
              </h2>
              <div className="w-20 h-1 bg-emerald-500 rounded"></div>
            </div>

            <div className="space-y-6 text-lg text-cream-200 leading-relaxed">
              <p>
                I'm a full-stack developer with 4+ years of experience crafting
                digital solutions that solve real-world problems. My passion
                lies in building accessible, performant web applications with
                clean code and intuitive design—because great technology should
                work for everyone.
              </p>
              <p>
                I thrive in the intersection of logic and creativity, leveraging
                TypeScript, React, and modern frameworks to turn ideas into
                scalable, user-centric experiences. When I'm not coding, I'm
                probably learning a new tech stack, contributing to open-source,
                or mentoring others.
              </p>
              <p className="text-emerald-400 font-medium">
                Let's build something meaningful together!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-cream-200 rounded-full text-sm font-medium border border-slate-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Open to Collaboration</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-cream-200 rounded-full text-sm font-medium border border-slate-600">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Based in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
