import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" stroke="currentColor" fill="none"/>
              <path d="M2 17l10 5 10-5" strokeWidth="2" stroke="currentColor" fill="none"/>
              <path d="M2 12l10 5 10-5" strokeWidth="2" stroke="currentColor" fill="none"/>
            </svg>
            <span className="text-lg font-semibold">OpenRouter</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Models</a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Chat</a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Rankings</a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Enterprise</a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Docs</a>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search"
                className="pl-8 w-64 h-8 text-sm bg-slate-50 border-slate-200"
              />
            </div>
            <Button variant="ghost" size="sm" className="text-sm">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;