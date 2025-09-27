import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-gta-purple-light/30 sticky top-0 z-50">
        {/* Logo - Right Side */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-gta-purple to-accent rounded-xl flex items-center justify-center">
            <i className="fas fa-gamepad text-white text-xl"></i>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gta-dark">SEVEN MTA</h1>
            <p className="text-sm text-gta-purple">سرور ام تی ای</p>
          </div>
        </div>

        {/* Navigation Menu - Center */}
        <nav className="flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gta-dark hover:text-gta-purple transition-colors font-medium"
          >
            خانه
          </button>
          <button className="text-gta-dark hover:text-gta-purple transition-colors font-medium">
            فروشگاه
          </button>
          <button className="text-gta-dark hover:text-gta-purple transition-colors font-medium">
            انجمن
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gta-dark hover:text-gta-purple transition-colors font-medium"
          >
            درباره ما
          </button>
        </nav>

        {/* Action Buttons - Left Side */}
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="gta-button-outline"
            onClick={() => scrollToSection('installation')}
          >
            <i className="fas fa-download"></i>
            آموزش نصب
          </Button>
          <Button 
            className="gta-button"
            onClick={() => window.open('https://dashboard.sevenmta.ir', '_blank')}
          >
            <i className="fas fa-tachometer-alt"></i>
            داشبورد
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Bar - Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gta-purple-light/30 z-50">
        <div className="flex items-center justify-around py-3">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex flex-col items-center gap-1 text-gta-purple"
          >
            <i className="fas fa-home text-lg"></i>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gta-dark/60">
            <i className="fas fa-users text-lg"></i>
            <span className="text-xs">Forum</span>
          </button>
          <button 
            onClick={() => scrollToSection('installation')}
            className="flex flex-col items-center gap-1 text-gta-dark/60"
          >
            <i className="fas fa-download text-lg"></i>
            <span className="text-xs">Download</span>
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-1 text-gta-dark/60"
          >
            <i className="fas fa-info-circle text-lg"></i>
            <span className="text-xs">About</span>
          </button>
          <button 
            onClick={() => window.open('https://dashboard.sevenmta.ir', '_blank')}
            className="flex flex-col items-center gap-1 text-gta-dark/60"
          >
            <i className="fas fa-tachometer-alt text-lg"></i>
            <span className="text-xs">Panel</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;