import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : "";
    }, [menuOpen]);

    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 text-gray-700">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-2xl font-bold text-black"> 
                    {" "}
                    Dina <span className="text-pink-500">Rolinza</span>{" "}
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden " 
                onClick={() => setMenuOpen((prev) => !prev)}
                >
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a 
                    href="#home" 
                    className="text-gray-700 font-medium hover:text-pink-500 transition-colors"
                    >
                        Home
                    </a>
                    <a 
                    href="#about" 
                    className="text-gray-700 font-medium hover:text-pink-500 transition-colors"
                    >
                        About
                    </a>
                    <a 
                    href="#projects" 
                    className="text-gray-700 font-medium hover:text-pink-500 transition-colors"
                    >
                        Projects
                    </a>
                    <a
                    href="#contact" 
                    className="text-gray-700 font-medium hover:text-pink-500 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>
    );
};