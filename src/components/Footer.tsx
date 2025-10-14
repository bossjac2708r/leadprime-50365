const Footer = () => {
  return (
    <footer className="bg-night-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl text-primary">⚡</span>
              <span className="text-xl font-bold">LeadPrime</span>
            </div>
            <p className="text-gray-300 max-w-md">
              AI-powered appointment booking and lead generation system specifically designed for solar companies.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Results</a></li>
              <li><a href="#get-started" className="hover:text-primary transition-colors">Get Started</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
          <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>founder@leadprime.pro</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 LeadPrime. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;