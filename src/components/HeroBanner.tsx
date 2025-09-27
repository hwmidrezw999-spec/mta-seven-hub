import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gta-characters.jpg";

const HeroBanner = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(87);

  useEffect(() => {
    // Simulate online players count update
    const interval = setInterval(() => {
      setOnlinePlayers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[70vh] gta-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between min-h-[70vh]">
        
        {/* Right Side - Text Content */}
        <div className="lg:w-1/2 text-right text-white mb-8 lg:mb-0 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            سرور <span className="text-yellow-300">SEVEN MTA</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 drop-shadow-md">
            بهترین تجربه GTA San Andreas را در سرور ایرانی تجربه کنید
          </p>
          
          {/* Online Players Counter */}
          <div className="gta-card inline-block p-4 mb-8 animate-glow">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold text-gta-dark">
                {onlinePlayers} بازیکن آنلاین
              </span>
            </div>
          </div>

          {/* Play Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="gta-button text-xl px-8 py-4 hover:scale-110"
              onClick={() => document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-play text-2xl"></i>
              شروع بازی
            </Button>
          </div>
        </div>

        {/* Left Side - Characters Image */}
        <div className="lg:w-1/2 relative animate-float">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gta-purple/30 to-accent/30 blur-2xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="GTA Characters" 
              className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
      </div>
    </section>
  );
};

export default HeroBanner;