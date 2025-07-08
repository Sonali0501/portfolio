import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sonali.nogja.08@gmail.com",
    href: "mailto:sonali.nogja.08@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9075196137",
    href: "tel:+919075196137",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Sonali0501",
    href: "https://github.com/Sonali0501",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sonali-nogja/",
    href: "https://www.linkedin.com/in/sonali-nogja/",
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-cream-100">
            Let's Work Together
          </h2>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
          <div className="w-20 h-1 bg-emerald-500 rounded mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mx-auto">
          {contactInfo.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              className="text-sm lg:text-lg text-cream-100 hover:text-emerald-400 transition-colors duration-200 w-full lg:w-fit"
            >
              <div className="flex items-center flex-shrink-0 p-4 bg-slate-800 rounded-xl shadow-sm border border-slate-700 w-full">
                <contact.icon className="h-7 w-7 text-emerald-400 mr-4" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-cream-100">
                    {contact.label}
                  </p>
                  <span className="text-sm text-cream-100 hover:text-emerald-400 transition-colors duration-200 break-all">
                    {contact.value}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
