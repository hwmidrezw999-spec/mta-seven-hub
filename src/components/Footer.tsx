const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gta-dark text-white py-12">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo Section */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-3 mb-4">
              <div>
                <h2 className="text-2xl font-bold">SEVEN MTA</h2>
                <p className="text-gta-purple text-sm">سرور ام تی ای</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-gta-purple to-accent rounded-xl flex items-center justify-center">
                <i className="fas fa-gamepad text-white text-xl"></i>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-gta-purple">دسترسی سریع</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('installation')}
                className="block w-full text-white/80 hover:text-white transition-colors"
              >
                دانلود و آموزش نصب
              </button>
              <a 
                href="https://dashboard.sevenmta.ir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-white transition-colors"
              >
                کنترل پنل
              </a>
              <a 
                href="#" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                انجمن
              </a>
              <a 
                href="#" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                قوانین سرور
              </a>
            </div>
          </div>

          {/* Server Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-gta-purple">اطلاعات سرور</h3>
            <div className="space-y-2 text-white/80">
              <p>
                <i className="fas fa-server text-gta-purple mr-2"></i>
                Sv.sevenmta.ir
              </p>
              <p>
                <i className="fas fa-network-wired text-gta-purple mr-2"></i>
                46.38.138.174:22003
              </p>
              <p>
                <i className="fas fa-clock text-gta-purple mr-2"></i>
                آنلاین 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center">
            <p className="text-white/60 text-sm">
              حقوق مادی و معنوی سرور برای SEVEN MTA محفوظ است.
            </p>
            <p className="text-white/40 text-xs mt-2">
              © 2024 SEVEN MTA Server. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;