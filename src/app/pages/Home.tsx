import { Code, Mail, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleViewDetails = () => {
    alert('Product details coming soon!');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 overflow-hidden">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-tight">
                We Build Professional Software Tools
              </h1>
              <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed">
                Apps From Zero develops modern, reliable, and scalable software
                applications for developers and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector('#products');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Products
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] opacity-20 blur-3xl rounded-full"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZSUyMGNvZGluZ3xlbnwxfHx8fDE3NzEyOTM0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer workspace"
                className="relative rounded-2xl shadow-2xl border border-[#334155]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 md:px-8 bg-[#0F172A]">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
              Our Products
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              Professional tools designed to make developers' lives easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              icon={<Code size={24} />}
              title="Dev Toolkit"
              description="Professional developer utility app including API Tester, JSON Formatter, Encoder, and UUID Generator."
              onViewDetails={handleViewDetails}
            />
            {/* Placeholder for future products */}
            <div className="bg-[#1E293B] border border-[#334155] border-dashed rounded-lg p-8 flex items-center justify-center">
              <p className="text-[#94A3B8] text-center">More products coming soon...</p>
            </div>
            <div className="bg-[#1E293B] border border-[#334155] border-dashed rounded-lg p-8 flex items-center justify-center">
              <p className="text-[#94A3B8] text-center">More products coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-8 text-center">
              About Apps From Zero LTD
            </h2>
            <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8 md:p-12">
              <p className="text-lg text-[#94A3B8] leading-relaxed mb-6">
                Apps From Zero LTD is a software development company based in the
                United Kingdom focused on building professional software tools and
                modern applications.
              </p>
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                We specialize in creating developer-focused tools that are reliable,
                scalable, and built with modern technologies. Our mission is to
                empower developers and businesses with high-quality software
                solutions.
              </p>
              <div className="mt-8 pt-8 border-t border-[#334155]">
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <MapPin size={20} className="text-[#38BDF8]" />
                  <span>London, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-[#0F172A]">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-[#94A3B8]">
              Get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#F8FAFC] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#F8FAFC] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#F8FAFC] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-6">
                  Company Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-[#38BDF8] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#F8FAFC] font-medium">Location</p>
                      <p className="text-[#94A3B8]">
                        Apps From Zero LTD
                        <br />
                        London, United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-[#38BDF8] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#F8FAFC] font-medium">Email</p>
                      <p className="text-[#94A3B8]">contact@appsfromzero.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2563EB] to-[#38BDF8] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">
                  Ready to work with us?
                </h3>
                <p className="opacity-90 mb-6">
                  We're always looking for new opportunities to create amazing
                  software solutions.
                </p>
                <Button variant="secondary" className="bg-white text-[#2563EB] hover:bg-gray-100">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
