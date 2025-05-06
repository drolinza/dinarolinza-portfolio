import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "Typescript",
    "TailwindCSS",
    "Svelte",
  ];
  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "PostgreSQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent text-center w-fit mx-auto">
            {""}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-black/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-800 mb-6">
              "Self-taught developer dedicated to creating impactful web and
              mobile applications with a focus on user experience."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-gray-800 text-xl font-bold mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-400/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-gray-800 text-xl font-bold mb-4">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-400/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-400/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-gray-800 text-xl font-bold mb-4">
                {" "}
                🏫 Education
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li className="text-gray-800">
                  <strong>Bachelor of Public Health</strong> - University of
                  Islamic Kalimantan MAAB (2018-2023)
                </li>
                {/* <li>
                                        Relevant Coursework:
                                    </li> */}
              </ul>
            </div>
            <div className="p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
              {/* <h3 className="text-gray-800 text-xl font-bold mb-4"> 💼 Work Experience</h3>
                                <div className="space-y-4 text-gray-800">
                                    <div>
                                        <h4 className="font-semibold">Software Engineer at ... (2025- Present)</h4>
                                        <p>Develop and maintained microservices for cloud-based applications.</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Intership at ... (2025)</h4>
                                        <p>Assisted in building front-end component and integration REST API</p>
                                    </div>
                                </div> */}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
