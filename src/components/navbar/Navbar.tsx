import Link from "next/link";
import { navigationItems } from "@/constants";
import { useScrollPosition, useMobileMenu } from "@/hooks";

export function Navbar() {
  const isScrolled = useScrollPosition();
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } = useMobileMenu();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative group">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              EcoCrate
            </h1>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navigationItems.map((item) => {
              const path = item === 'Shop' ? '/components/ui/shop' : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  href={path}
                  className="relative px-3 py-2 group"
                >
                  <span className="relative z-10 text-gray-600 group-hover:text-emerald-600 transition-colors">
                    {item}
                  </span>
                  <span className="absolute inset-0 w-full h-full rounded-full bg-emerald-50 scale-0 group-hover:scale-100 transition-transform origin-center"></span>
                </Link>
              );
            })}

            <div className="ml-4 flex items-center gap-2">
              <Link
                href="/auth/login"
                className="relative px-4 py-2 group overflow-hidden rounded-full"
              >
                <span className="relative z-10 text-emerald-600 group-hover:text-white transition-colors">
                  Login
                </span>
                <span className="absolute inset-0 w-full h-full bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link
                href="/auth/signup"
                className="relative px-4 py-2 group overflow-hidden rounded-full"
              >
                <span className="relative z-10 text-white">
                  Sign Up
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>
            </div>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden relative w-10 h-10 rounded-full hover:bg-emerald-50 transition-colors focus:outline-none group"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 flex flex-col items-center justify-center space-y-1.5 transition-all">
                <span className={`block w-6 h-0.5 bg-gray-600 transform transition-transform ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transform transition-transform ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="absolute w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => {
              const path = item === 'Shop' ? '/components/ui/shop' : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  href={path}
                  className="block px-4 py-3 rounded-xl text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  {item}
                </Link>
              );
            })}
            <div className="grid grid-cols-2 gap-2 pt-4">
              <Link
                href="/auth/login"
                className="flex items-center justify-center px-4 py-3 rounded-xl text-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:opacity-90 transition-opacity"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 