import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-700  ">
            Hi! I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-200 bg-clip-text text-transparent leading-right">
              Dina Rolinza
            </span>
          </h1>

          <p className="text-gray-800 text-lg mb-8 max-w-lg mx-auto">
            A self-taught software developer who passionate about building
            seamless digital experiences and solving real-world problems
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-pink-400 text-white py-3 px-6 rounded-3xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-pink-400 text-pink-400 py-3 px-6 rounded-3xl font-medium transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-pink-400/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
