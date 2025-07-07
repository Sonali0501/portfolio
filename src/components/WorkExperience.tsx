import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Experiences = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Jisr",
    location: "Remote",
    period: "April 2025 - Present",
    type: "Full-time",
    achievements: [
      "Working on a Compensation Management product, building and maintaining key features.",
      "Contributed to the React 18 upgrade, ensuring compatibility and performance improvements.",
      "Participate in PR reviews and continuously improve code quality through refactoring.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "TypeScript",
      "Next.js",
      "Zustand",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    title: "Software Development Engineer II",
    company: "Exly",
    location: "Gurugram, Haryana",
    period: "July 2024 - April 2025",
    type: "Full-time",
    achievements: [
      "Reduced application load time from 5-6 sec to 1-2 sec, improving user experience and performance",
      "Developed a new UI for the Exly Creator Tool, significantly improving usability and aesthetics.",
      "Engineered a timeline logs view with paginated infinite scrolling, optimizing performance and enhancing UX for effortless navigation of large data logs.",
      "Built an Omni-channel communication system to handle WhatsApp messages and emails directly within the Exly Creator Tool, streamlining creator interactions.",
      "Implemented Server-Sent Event listeners to simulate real-time messaging and mailing within the Omnichannel system.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "TypeScript",
      "Tanstack-query",
      "Zustand",
      "Redux",
      "Tailwind CSS",
      "React-admin",
    ],
  },
  {
    id: 3,
    title: "Software Development Engineer I",
    company: "Chqbook",
    location: "Gurugram, Haryana",
    period: "Aug 2022 - Jun 2024",
    type: "Full-time",
    achievements: [
      "Migrated from Experian to CIBIL integration, improving credit report accuracy and enhancing the customer experience.",
      "Implemented a Business Rule Engine, improving underwriting-to-disbursal rate by 17%.",
      "Developed a standalone Business KYC module using Karza APIs, eliminating manual intervention.",
      "Implemented modularization and lazy loading, integrated TanStack Query, and standardized its application usage. Actively participated in peer reviews to maintain high code quality.",
      "Designed a scalable WhatsApp and email notification service to provide timely, real-time alerts to users.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "TypeScript",
      "MySQL",
      "MongoDB",
      "Node.js",
      "Express",
      "Redux",
      "Apache Kafka",
    ],
  },
  {
    id: 4,
    title: "Software Intern",
    company: "Peritus.ai",
    location: "Remote",
    period: "Jan 2022 - Jul 2022",
    type: "Full-time",
    achievements: [
      "Engineered an advanced recommendation filtering and feedback feature for Peritus Slack Assistant, improving user engagement with more personalized recommendations.",
      "Automated the generation of periodic data reports by leveraging Redis queue and MongoDB aggregations, improving backend performance and operational efficiency.",
      "Implemented question identification in Peritus Slack Assistant, reducing message clutter and optimizing the user experience with more precise interactions.",
    ],
    technologies: ["JavaScript", "TypeScript", "MongoDB", "Node.js"],
  },
  {
    id: 5,
    title: "Frontend Development Intern",
    company: "Flam",
    location: "Bengaluru, Karnataka",
    period: "Sept 2021 - Dec 2021",
    type: "Full-time",
    achievements: [
      "Spearheaded end-to-end development of Instant Flamcards, boosting organic user acquisition by 22%.",
      "Designed and implemented a reward system that significantly boosted user retention rates by fostering continued engagement and loyalty.",
      "Engineered the user journey for the e-commerce checkout process for Flamcards, optimizing for smooth navigation and conversion.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Redux", "Next.js"],
  },
];

const WorkExperience: React.FC = () => {
  const [openExperiences, setOpenExperiences] = useState<number[]>([]);

  const toggleExperience = (id: number) => {
    setOpenExperiences((prev) => {
      if (prev.includes(id)) {
        return prev.filter((expId) => expId !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-cream-100">
            Work Experience
          </h2>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            My professional journey building impactful digital solutions
          </p>
          <div className="w-20 h-1 bg-emerald-500 rounded mx-auto"></div>
        </div>

        <div className="space-y-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>

            <div className="space-y-8">
              {Experiences.map((experience) => (
                <div
                  key={experience.title + experience.company}
                  className="relative flex items-start lg:space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-8 lg:w-16 flex justify-center">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900"></div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 w-full">
                          <div>
                            <h4 className="text-xl font-semibold text-cream-100">
                              {experience.title}
                            </h4>
                            <p className="text-emerald-400 font-medium">
                              {experience.company}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 text-sm text-cream-300">
                            <p>{experience.location}</p>
                            <p>{experience.period}</p>
                          </div>
                        </div>
                        <div className="lg:hidden">
                          {openExperiences.includes(experience.id) ? (
                            <ChevronUp
                              className="w-8 h-8 text-emerald-400"
                              onClick={() => toggleExperience(experience.id)}
                            />
                          ) : (
                            <ChevronDown
                              className="w-8 h-8 text-emerald-400"
                              onClick={() => toggleExperience(experience.id)}
                            />
                          )}
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out lg:overflow-visible 
                          ${
                            openExperiences.includes(experience.id)
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          } 
                          lg:max-h-full lg:opacity-100`}
                      >
                        <ul className="space-y-1 mt-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-sm text-cream-300"
                            >
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-slate-700 text-cream-200 rounded text-xs font-medium border border-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
