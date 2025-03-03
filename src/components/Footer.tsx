import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-heading font-bold text-white">Edu Hub</span>
            </Link>
            <p className="text-neutral-400 mb-4">
              Empowering learners worldwide with quality educational content and resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Business & Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h4>
            <p className="text-neutral-400 mb-4">
              Stay updated with our latest courses and articles.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bg-primary-600 p-1 rounded text-white hover:bg-primary-700 transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-neutral-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Edu Hub. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 justify-center">
            <a href="#" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;