import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Desktop/Large Sidebar */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-64 p-6 bg-[#FFEAC5]/90 backdrop-blur-lg border-r border-[#6C4E31]/20 z-40 shadow-xl">
        {/* Logo with hover effect */}
        <div className="mb-10 group">
          <h2 className="text-2xl font-bold text-[#603F26] group-hover:text-[#6C4E31] transition-colors duration-300 flex items-center">
            <span className="mr-2">ChocoUI</span>
            <span className="w-2 h-2 rounded-full bg-[#6C4E31] group-hover:bg-[#603F26] transition-all duration-300"></span>
          </h2>
          <div className="h-0.5 w-16 bg-[#603F26] mt-2 group-hover:w-24 transition-all duration-500"></div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {[
            { name: "Home", path: "/" },
            { name: "Navbar", path: "/components/navbar" },
            { name: "Footer", path: "/components/footer" }, 
            { name: "Cards", path: "/components/cards" },
            { name: "Buttons", path: "/components/buttons" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-[#FFDBB5] text-[#603F26] shadow-inner"
                  : "text-[#6C4E31] hover:bg-[#FFDBB5]/50 hover:text-[#603F26]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#603F26]/70 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 p-6 bg-[#FFEAC5] shadow-2xl transition-transform duration-500 ease-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-[#603F26]">ChocoUI</h2>
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-lg bg-[#603F26] text-[#FFEAC5] hover:bg-[#6C4E31]"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="space-y-3">
          {[
            { name: "Home", path: "/" },
            { name: "Navbar", path: "/components/navbar" },
            { name: "Footer", path: "/components/footer" },
            { name: "Cards", path: "/components/cards" },
            { name: "Buttons", path: "/components/buttons" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className={`block px-5 py-3.5 rounded-xl text-lg font-medium transition-all ${
                location.pathname === item.path
                  ? "bg-[#FFDBB5] text-[#603F26] shadow-sm"
                  : "text-[#6C4E31] hover:bg-[#FFDBB5]/30"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          onClick={toggleSidebar}
          className="p-3 rounded-xl bg-[#FFEAC5] shadow-lg text-[#603F26] hover:bg-[#FFDBB5] transition-all"
        >
          <Menu size={24} />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;