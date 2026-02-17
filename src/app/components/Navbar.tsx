import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/#products' },
    { name: 'About', path: '/#about' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Contact', path: '/#contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.slice(1);
    }
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('/#')) {
      const element = document.querySelector(path.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#334155] bg-[#0F172A]/80 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#2563EB]">
              <span className="font-semibold text-white">A</span>
            </div>
            <span className="text-lg font-semibold text-[#F8FAFC]">
              Apps From Zero
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-[#38BDF8]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#F8FAFC]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`block py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-[#38BDF8]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
