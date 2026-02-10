'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Gradient divider */}
          <div className="section-divider mb-12" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Name and copyright */}
            <div className="text-center md:text-left">
              <p className="font-semibold text-foreground text-lg mb-1">
                Abhinay Kumar Sahu
              </p>
              <p className="text-muted-foreground text-sm flex items-center gap-1 justify-center md:justify-start">
                Made with <Heart size={14} className="text-pink-accent" fill="currentColor" /> in India
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                © {currentYear} All rights reserved.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/MorphIsDed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link text-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhinay-sahu-677846319/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link text-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:sahuabhinay317@gmail.com"
                className="social-link text-foreground hover:text-primary"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
