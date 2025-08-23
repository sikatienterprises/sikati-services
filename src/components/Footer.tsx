import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-corporate text-corporate-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img className="w-16 h-16" src="./logo.png" alt="logo" />
            </div>
            <span className="text-xl font-bold">Sikati Solutions</span>

            <p className="text-corporate-foreground/80 mb-6 leading-relaxed">
              Professional staffing solutions for government, corporate, and
              private events. Reliable, experienced, and available 24/7.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-corporate-foreground/60 hover:text-primary-glow transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-corporate-foreground/60 hover:text-primary-glow transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-corporate-foreground/60 hover:text-primary-glow transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/government"
                  className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                >
                  Government Events
                </Link>
              </li>
              <li>
                <Link
                  to="/services/corporate"
                  className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                >
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link
                  to="/services/labor"
                  className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                >
                  Temporary Labor
                </Link>
              </li>
              <li>
                <Link
                  to="/services/security"
                  className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                >
                  Security Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/emergency"
                  className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                >
                  Emergency Staffing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                >
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-glow mt-0.5" />
                <div>
                  <div className="font-medium">24/7 Emergency Line</div>
                  <a
                    href="tel:+1-800-STAFFPRO"
                    className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                  >
                    +91 7371960746
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-glow mt-0.5" />
                <div>
                  <div className="font-medium">Email Us</div>
                  <a
                    href="mailto:contact@staffprosolutions.com"
                    className="text-corporate-foreground/80 hover:text-primary-glow transition-colors"
                  >
                    contact@sikati.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-glow mt-0.5" />
                <div>
                  <div className="font-medium">Main Office</div>
                  <div className="text-corporate-foreground/80">
                    Ara
                    <br />
                    Bhojpur
                    <br />
                    Bihar, India, 802301
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-glow mt-0.5" />
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-corporate-foreground/80">
                    Mon-Fri: 8AM-6PM
                    <br />
                    Emergency: 24/7
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button variant="hero" size="sm" asChild>
                <Link to="/quote">Get Quote Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-corporate-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-corporate-foreground/60 mb-4 md:mb-0">
              © 2024 StaffPro Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-corporate-foreground/60 hover:text-primary-glow transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-corporate-foreground/60 hover:text-primary-glow transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/security"
                className="text-corporate-foreground/60 hover:text-primary-glow transition-colors"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
