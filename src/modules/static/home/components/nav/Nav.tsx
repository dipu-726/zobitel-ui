import { MoveUpRight, SquareArrowOutUpRight } from "lucide-react";
import React, { useState, useMemo } from "react";

const BASE_NAV_LINKS = [
  { title: "Pricing", path: "/pricing" },
  { title: "Resources", path: "https://resources.aznaai.com" },
  {
    title: "Book A Demo",
    cta: true, 
    path: "https://calendly.com/hello-aznaai/meet-and-greet",
  },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // For demo: simulate authentication state
  const isLoggedIn = false;

  const navigation = useMemo(() => {
    if (isLoggedIn)
      return [...BASE_NAV_LINKS, { title: "My Space", path: "/dashboard" }];
    return BASE_NAV_LINKS;
  }, [isLoggedIn]);

  return (
    <nav className="bg-white border-b w-full sticky top-0 z-40 shadow-sm">
      <div className="items-center px-4 max-w-7xl mx-auto md:flex md:px-8">
        {/* Logo + Mobile Toggle */}
        <div className="flex items-center justify-between py-3 md:py-5 w-full md:w-auto">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="https://d2dy2zxynwqvwr.cloudfront.net/icons/website/36.png"
              alt="AznaAI-logo"
              className="w-28 h-auto"
            />
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-1 md:flex md:items-center md:justify-end ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0">
            {navigation.map((item, idx) => (
              <li key={idx}>
                {item.cta ? (
                  <a
                    href={item.path}
                    className="flex gap-1 px-4 items-center underline-offset-4 underline hover:text-black transition-colors"
                    target={item.path.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {item.title} <SquareArrowOutUpRight height={14} width={14} />
                  </a>
                ) : (
                  <a
                    href={item.path}
                    className="text-gray-700 hover:text-black transition-colors"
                    target={item.path.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}

            {/* Divider */}
            <span className="hidden md:block w-px h-6 bg-gray-300"></span>

            {/* Auth Buttons */}
            <li>
              <a
                href="/dashboard"
                className="py-2 text-gray-700 hover:text-indigo-600 rounded-lg transition flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
                My Space
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
