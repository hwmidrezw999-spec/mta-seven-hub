import { useState } from "react";

const FAQContact = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "سرور سِوِن ام تی ای چیه؟",
      answer: "سرور SEVEN MTA یک سرور ایرانی GTA San Andreas است که با استفاده از پلتفرم Multi Theft Auto اجرا می‌شود و امکان بازی آنلاین با بازیکنان دیگر را فراهم می‌کند."
    },
    {
      question: "لانچر MTA چیه؟",
      answer: "Multi Theft Auto (MTA) یک نرم‌افزار رایگان است که امکان بازی آنلاین GTA San Andreas را فراهم می‌کند. این لانچر باید بر روی سیستم شما نصب باشد تا بتوانید به سرور متصل شوید."
    },
    {
      question: "قوانین سرور چیه؟",
      answer: "قوانین سرور شامل عدم استفاده از چیت، رفتار محترمانه با سایر بازیکنان، عدم اسپم و رعایت اصول fair play است. برای مطالعه کامل قوانین به بخش قوانین سایت مراجعه کنید."
    }
  ];

  const socialLinks = [
    {
      name: "اینستاگرام",
      icon: "fab fa-instagram",
      url: "#",
      color: "hover:text-pink-500"
    },
    {
      name: "دیسکورد", 
      icon: "fab fa-discord",
      url: "#",
      color: "hover:text-indigo-500"
    },
    {
      name: "تلگرام",
      icon: "fab fa-telegram",
      url: "#",
      color: "hover:text-blue-500"
    },
    {
      name: "یوتیوب",
      icon: "fab fa-youtube", 
      url: "#",
      color: "hover:text-red-500"
    },
    {
      name: "آپارات",
      icon: "fas fa-play-circle",
      url: "#",
      color: "hover:text-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-gta-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-gta-dark mb-8 text-right">
              سوالات متداول
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="gta-card p-4 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <i className={`fas fa-chevron-${openFAQ === index ? 'up' : 'down'} text-gta-purple transition-transform duration-300`}></i>
                    <h3 className="text-lg font-bold text-gta-dark">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {openFAQ === index && (
                    <div className="mt-4 pt-4 border-t border-gta-purple-light/30 animate-slide-up">
                      <p className="text-gta-purple text-right leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h2 className="text-3xl font-bold text-gta-dark mb-8 text-right">
              ارتباط با ما
            </h2>
            
            <div className="gta-card p-8 text-center">
              <h3 className="text-xl font-bold text-gta-dark mb-6">
                ما را در شبکه‌های اجتماعی دنبال کنید
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex flex-col items-center gap-3 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 ${social.color} group`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gta-purple to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className={`${social.icon} text-white text-xl`}></i>
                    </div>
                    <span className="text-sm font-medium text-gta-dark">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gta-purple/10 rounded-lg">
                <p className="text-gta-dark font-medium">
                  <i className="fas fa-envelope text-gta-purple mr-2"></i>
                  پشتیبانی 24 ساعته در دسترس شماست
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQContact;