import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 py-3 flex justify-between items-center">
        {/* Company Name */}
        <div className="text-xl font-bold">{"I-Ready Demo"}</div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "underline font-semibold"
                    : "hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "underline font-semibold"
                    : "hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "underline font-semibold"
                    : "hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
