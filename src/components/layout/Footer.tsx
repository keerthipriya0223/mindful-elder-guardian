
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Elder Guardian. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-guardian-purple transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-guardian-purple transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-guardian-purple transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
