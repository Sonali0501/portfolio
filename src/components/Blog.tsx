import React from "react";
import { ArrowRight } from "lucide-react";

const Blog: React.FC = () => {
  const posts = [
    {
      link: "https://medium.com/@sonali.nogja.08/microfrontends-vs-monorepos-a-comprehensive-guide-to-scaling-frontend-architecture-a796a998fb09",
      title:
        "Microfrontends vs. Monorepos: A Comprehensive Guide to Scaling Frontend Architecture",
      excerpt:
        "Understand when to choose microfrontends, monorepos, or both — based on performance, team structure, and tooling",
      date: "2024-07-05",
      readTime: "4 min read",
      image: "src/assets/frontend_architecture_blog_thumbnail.png",
      category: "Frontend Architecture",
    },
    {
      link: "https://medium.com/@sonali.nogja.08/the-overengineering-trap-why-simplicity-matters-in-software-development-3ad366feb227",
      title:
        "The Overengineering Trap: Why Simplicity Matters in Software Development",
      excerpt:
        "By focusing on simplicity, you can build software that’s faster to develop, easier to maintain, and more enjoyable to use.",
      date: "2024-01-29",
      readTime: "4 min read",
      image: "src/assets/overengineering_trap_blog_thumbnail.png",
      category: "Software Development",
    },
    {
      link: "https://medium.com/@sonali.nogja.08/deep-dive-into-react-fiber-architecture-performance-optimizations-and-evolution-7075b58d8cc7",
      title:
        "Deep Dive into React Fiber: Architecture, Performance Optimizations, and Evolution",
      excerpt:
        "By understanding Fiber’s architecture, developers can optimize apps for smoother UX, better error handling, and future-ready performance.",
      date: "2024-03-26",
      readTime: "3 min read",
      image: "src/assets/react_fiber_blog_thumbnail.png",
      category: "React",
    },
    {
      link: "https://medium.com/@sonali.nogja.08/debugging-memory-leaks-in-react-b254a7eb6863",
      title: "Debugging Memory Leaks in React",
      excerpt:
        "Remember that prevention is better than cure — adopting clean-up patterns early in your development process will save you from memory-related headaches down the road.",
      date: "2023-06-12",
      readTime: "3 min read",
      image: "src/assets/memory_leaks_blog_thumbnail.png",
      category: "Performance",
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-cream-100">
            Latest Blogs
          </h2>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Thoughts on development, web performance, frontend architecture, and
            the evolving web
          </p>
          <div className="w-20 h-1 bg-emerald-500 rounded mx-auto"></div>
        </div>

        <div className="space-y-8 mx-4 lg:mx-0">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group cursor-pointer bg-slate-700 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-600"
                onClick={() => window.open(post.link, "_blank")}
              >
                <div className="flex flex-col lg:flex-row lg:space-x-4 gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 lg:w-24 lg:h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center space-x-2 text-xs text-cream-400">
                      <span className="px-2 py-1 bg-slate-800 text-cream-300 rounded font-medium border border-slate-600">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-cream-100 group-hover:text-emerald-400 transition-colors duration-200 leading-tight">
                      {post.title}
                    </h4>

                    <p className="text-sm text-cream-300 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-cream-300">
                        {formatDate(post.date)}
                      </span>
                      <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium"
            onClick={() =>
              window.open("https://medium.com/@sonali.nogja.08", "_blank")
            }
          >
            <span>View All Posts</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
