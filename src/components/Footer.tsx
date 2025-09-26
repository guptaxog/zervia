import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const links = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    services: [
      { name: 'For Universities', href: '#' },
      { name: 'For Students', href: '#' },
      { name: 'For Startups', href: '#' },
      { name: 'Events', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Zervia
              </h3>
              <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                Empowering students with startup opportunities across India. Connect, learn, and grow with the next generation of innovators.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:hello@zervia.in" className="hover:underline">hello@zervia.in</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-center md:text-left">
            <p>&copy; 2024 Zervia. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;