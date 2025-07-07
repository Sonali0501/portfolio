import React from "react";
import { Code, Database, Settings, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Markup Languages",
    icon: Code,
    color: "text-blue-400",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    color: "text-green-400",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "React Query",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    color: "text-purple-400",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Firebase"],
  },
  {
    title: "Tools & Technologies",
    icon: Settings,
    color: "text-orange-400",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Jira"],
  },
];

const SkillsMarquee: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-cream-100">
            Technical Skills
          </h2>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable software solutions
          </p>
          <div className="w-20 h-1 bg-emerald-500 rounded mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 lg:mx-0">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-8 bg-slate-900/20 backdrop-blur-md rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border border-slate-600/50 shadow-lg`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="text-center space-y-4">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-slate-800 ${category.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3
                    className={`text-xl font-semibold text-cream-100 group-hover:!${category.color} transition-colors duration-200`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-cream-100 rounded-full text-sm font-medium border border-white/20 transition-all duration-200 hover:scale-105 hover:bg-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
