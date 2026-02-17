import { Link } from 'react-router';

export function Footer() {
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/#products' },
    { name: 'About', path: '/#about' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      setTimeout(() => {
        const element = document.querySelector(path.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="border-t border-[#334155] bg-[#0F172A]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#2563EB]">
                <span className="font-semibold text-white">A</span>
              </div>
              <span className="text-lg font-semibold text-[#F8FAFC]">
                Apps From Zero
              </span>
            </div>
            <p className="text-[#94A3B8]">
              Building professional software tools and modern applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F8FAFC] font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="block text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-[#F8FAFC] font-semibold mb-4">Company</h3>
            <div className="text-[#94A3B8] space-y-1">
              <p>Apps From Zero LTD</p>
              <p>London, United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#334155]">
          <p className="text-center text-[#94A3B8]">
            © 2026 Apps From Zero LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
