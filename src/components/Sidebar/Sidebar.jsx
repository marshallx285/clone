import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Settings, LogOut, Folder, Bell, MessageSquare, Briefcase, Book } from "lucide-react";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current route

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
        <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white p-4 w-48 transform ${
          isOpen ? "translate-x-0" : "-translate-x-48"
        } md:translate-x-0 transition-transform duration-300 ease-in-out shadow-lg overflow-y-auto z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <button className="md:hidden p-1" onClick={toggleSidebar}>
            <X size={22} className="text-white" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="space-y-3">
          {[
            { name: "Home", icon: Home, path: "/" },
            { name: "Profile", icon: User, path: "/dashboard/about" },
            { name: "Settings", icon: Settings, path: "/settings" },
            { name: "Notifications", icon: Bell, path: "/notifications" },
            { name: "Messages", icon: MessageSquare, path: "/messages" },
            { name: "Projects", icon: Briefcase, path: "/projects" },
            { name: "Files", icon: Folder, path: "/files" },
            { name: "Resources", icon: Book, path: "/resources" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-2 rounded-lg w-full transition ${
                location.pathname === item.path ? "bg-gray-800" : "hover:bg-gray-900"
              }`}
            >
              <item.icon size={20} className="text-white" />
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}

          {/* Logout Button */}
          <button className="flex items-center gap-3 p-2 rounded-lg w-full transition hover:bg-gray-800">
            <LogOut size={20} className="text-white" />
            <span className="text-sm">Logout</span>
          </button>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 py-3 shadow-md">
        <button className="p-1" onClick={toggleSidebar}>
          <Menu size={24} className="text-white" />
        </button>
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <div className="w-6"></div>
      </div>
    </div>
  )
}

export default Sidebar