import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const Contacts = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setformData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-white text-gray-700"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-200 bg-clip-text text-transparent text-center">
            Contact Me
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-gray-500/30 rounded-xl px-4 py-3 text-gray-500 transition focus:outline-none focus:border-pink-400 focus:bg-gray-400/5"
                placeholder="Name"
                onChange={(e) =>
                  setformData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-gray-500/30 rounded-xl px-4 py-3 text-gray-500 transition focus:outline-none focus:border-pink-400 focus:bg-gray-400/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setformData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-gray-500/30 rounded-xl px-4 py-3 text-gray-500 transition focus:outline-none focus:border-pink-400 focus:bg-gray-400/5"
                placeholder="Your Message"
                onChange={(e) =>
                  setformData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-400 text-white py-3 px-6 rounded-3xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-1x1 font-bold mb-8 bg-gray-600 bg-clip-text text-transparent text-center">
          <h2>Or</h2>
        </div>

        <div className="flex justify-center gap-6 text-3xl mt-4">
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=drolinza@gmail.com&su=Your%20Subject&body=Your%20Messages&tf=cm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all"
          >
            <MdEmail size={30} />
          </a>
          <a
            href="https://github.com/drolinza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/dinarolinza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all"
          >
            <FaLinkedinIn size={30} />
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
