import mafiaBackground from "@/assets/mafia-background.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${mafiaBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gta-dark/90 via-gta-dark/70 to-gta-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-slide-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 drop-shadow-lg">
              درباره سرور <span className="text-yellow-300">SEVEN MTA</span>
            </h2>
            
            <div className="gta-card bg-black/40 p-8 mb-8">
              <p className="text-lg lg:text-xl leading-relaxed mb-6 text-gray-100">
                سرور SEVEN MTA یکی از بهترین و پرجمعیت‌ترین سرورهای ایرانی GTA San Andreas است که با استفاده از پلتفرم Multi Theft Auto ارائه می‌شود. ما با تیمی مجرب و حرفه‌ای تلاش می‌کنیم تا بهترین تجربه بازی آنلاین را برای شما فراهم کنیم.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gta-purple to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-users text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2">جامعه فعال</h3>
                  <p className="text-sm text-gray-300">بیش از 500 بازیکن فعال روزانه</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gta-purple to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-shield-alt text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2">امنیت بالا</h3>
                  <p className="text-sm text-gray-300">سیستم ضد تقلب پیشرفته</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gta-purple to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-clock text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2">دسترسی 24/7</h3>
                  <p className="text-sm text-gray-300">سرور آنلاین 24 ساعته</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 animate-pulse">
              برای اطلاعات بیشتر به پایین اسکرول کنید
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gta-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default AboutUs;