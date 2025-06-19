import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" stroke="currentColor" fill="none"/>
                <path d="M2 17l10 5 10-5" strokeWidth="2" stroke="currentColor" fill="none"/>
                <path d="M2 12l10 5 10-5" strokeWidth="2" stroke="currentColor" fill="none"/>
              </svg>
              <span className="text-lg font-semibold">OpenRouter</span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              © 2023 - 2025 OpenRouter, Inc.
            </p>
            <div className="flex gap-4">
              <Github className="w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-slate-900 mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Status</a></li>
              <li><a href="#" className="hover:text-slate-900">Announcements</a></li>
              <li><a href="#" className="hover:text-slate-900">Docs</a></li>
              <li><a href="#" className="hover:text-slate-900">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-slate-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Enterprise</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-slate-900 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Terms</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;