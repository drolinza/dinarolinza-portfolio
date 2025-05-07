import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent text-center w-fit mx-auto">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Todo App </h3>
              <p className="text-gray-500 mb-4">
                Todo list app based on website with pinkish theme.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "CSS", "React.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-400/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="http://pinkish-todo-app.netlify.app"
                  target="_blank"
                  className="text-pink-500 hover:text-pink-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> E-commerce Web App</h3>
              <p className="text-gray-500 mb-4">
                Full-stack E-Commerce with modern UI
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "CSS", "React.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-400/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="http://pinkish-todo-app.netlify.app"
                  className="text-pink-500 hover:text-pink-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Sehatin AI </h3>
              <p className="text-gray-500 mb-4">
                Indonesia Public Health Data with AI.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "CSS", "React.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-400/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="http://pinkish-todo-app.netlify.app"
                  className="text-pink-500 hover:text-pink-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Pharmacy Web </h3>
              <p className="text-gray-500 mb-4">
                Help pharmacy to data their drug, recipe, medical, revenue.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "CSS", "React.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-400/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="http://pinkish-todo-app.netlify.app"
                  className="text-pink-500 hover:text-pink-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div> */}
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
