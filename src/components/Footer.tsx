
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-background mb-4">Let's Connect!</h3>
            <p className="text-accent mb-4">
              Ready to collaborate on innovative projects or discuss exciting opportunities? 
              Let's create a better tomorrow together!
            </p>
            <div className="space-y-2">
              <p className="text-background">
                <span className="text-accent">📧 Email:</span> mahimmiraj@outlook.com
              </p>
              <p className="text-background">
                <span className="text-accent">📱 Phone:</span> +8801638669641
              </p>
              <p className="text-background">
                <span className="text-accent">📍 Location:</span> Narayanganj, Bangladesh
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-accent mb-4">Follow My Journey</h4>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:mahimmiraj@outlook.com" className="bg-accent text-primary-dark px-4 py-2 rounded-lg hover:bg-accent-dark transition font-medium">
                Email Me
              </a>
              <a href="https://linkedin.com/in/mirajulislam" target="_blank" rel="noopener noreferrer" className="border-2 border-background text-background px-4 py-2 rounded-lg hover:bg-background hover:text-primary-dark transition font-medium">
                LinkedIn
              </a>
              <a href="https://github.com/mirajulislam" target="_blank" rel="noopener noreferrer" className="border-2 border-background text-background px-4 py-2 rounded-lg hover:bg-background hover:text-primary-dark transition font-medium">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary pt-8 text-center">
          <p className="text-background">
            &copy; {new Date().getFullYear()} Md. Mirajul Islam Mahim. All rights reserved.
          </p>
          <p className="text-accent text-sm mt-2">
            "Innovation is the bridge between dreams and reality" 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
