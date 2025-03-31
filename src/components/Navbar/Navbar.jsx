import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Components", path: "/components" },
    { name: "Documentation", path: "/documentation" },
    { name: "Examples", path: "/examples" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#FFEAC5]/50 backdrop-blur-md shadow-lg" : "bg-[#FFEAC5]/80 backdrop-blur-sm"} border-b border-[#6C4E31]/20`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo with dark brown text */}
          <NavLink to="/" className="flex items-center group">
            <span className="text-2xl font-bold text-[#603F26] group-hover:text-[#6C4E31] transition-colors duration-300 relative">
              ChocoUI
              <span className="absolute -bottom-1 left-0 h-0.5 bg-[#6C4E31] w-0 group-hover:w-full transition-all duration-500"></span>
            </span>
            <span className="ml-1.5 w-2 h-2 rounded-full bg-[#6C4E31] group-hover:bg-[#603F26] transition-all duration-300"></span>
          </NavLink>

          {/* Desktop Menu with glass panels */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#FFDBB5]/60 text-[#603F26] shadow-inner"
                      : "text-[#6C4E31] hover:bg-[#FFDBB5]/40 hover:text-[#603F26]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button className="ml-2 px-5 py-2.5 bg-[#603F26] text-[#FFEAC5] rounded-lg font-bold hover:bg-[#6C4E31] transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2.5 rounded-lg ${isOpen ? "bg-[#603F26] text-[#FFEAC5]" : "bg-[#FFDBB5] text-[#603F26]"} transition-all`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with solid light background */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 bg-" : "opacity-0 pointer-events-none"}`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#6C4E31]/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`relative bg-[#FFEAC5] w-4/5 max-w-sm h-full shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} border-r border-[#6C4E31]/20`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-6 ">
            <div className="flex justify-between items-center mb-10">
              <span className="text-2xl font-bold text-[#603F26]">ChocoUI</span>
              <button
                className="p-2 rounded-lg bg-[#603F26] text-[#FFEAC5] hover:bg-[#6C4E31]"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 space-y-3 backdrop-blur-xl bg-[#FFDBB5]/95 rounded-xl p-4 border border-[#FFEAC5]/30">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-5 py-3.5 rounded-lg text-lg font-medium transition-all  ${
                      isActive
                        ? "bg-[#FFEAC5]/80 text-[#603F26] shadow-sm"
                        : "text-[#6C4E31] hover:bg-[#FFEAC5]/50"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <button className="mt-8 py-3.5 bg-[#603F26] text-[#FFEAC5] rounded-lg font-bold hover:bg-[#6C4E31] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
