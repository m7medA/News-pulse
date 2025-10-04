import { NavLink } from "react-router-dom";
import VectorLogo from "../assets/VectorLogo.png";
import { FaFacebook, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t-4 pt-8">
      <div className="border-b-2 py-2">
        <NavLink to="/">
          <img src={VectorLogo} alt="logo" className="w-48" />
        </NavLink>
      </div>

      <div className="p-2 flex justify-between text-center text-sm text-gray-600">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} News Pulse. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/yourusername/news-pulse"
            target="_blank"
            rel="noopener noreferrer"
            className=" transition hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </a>

          <a
            href="https://github.com/yourusername/news-pulse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-600 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
