import { Button } from "@/components/ui/button";

const InstallationGuide = () => {
  const steps = [
    {
      title: "دانلود GTA:SA",
      description: "ابتدا بازی GTA:SA نسخه اورجینال را دانلود و نصب کنید.",
      icon: "fas fa-gamepad",
      buttonText: "دانلود",
      buttonIcon: "fas fa-download"
    },
    {
      title: "دانلود لانچر MTA",
      description: "لانچر MTA را دانلود کرده و هنگام نصب پوشه GTA:SA را انتخاب کنید.",
      icon: "fas fa-rocket",
      buttonText: "دانلود",
      buttonIcon: "fas fa-download"
    },
    {
      title: "ورود به سرور",
      description: "در آخر وارد سرور SEVEN MTA شوید به آدرس:",
      icon: "fas fa-server",
      buttonText: "ورود به سرور",
      buttonIcon: "fas fa-play",
      serverAddress: "Sv.sevenmta.ir",
      serverIP: "46.38.138.174:22003"
    }
  ];

  return (
    <section id="installation" className="py-16 bg-gta-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gta-dark mb-4">
            آموزش اتصال به سرور
          </h2>
          <p className="text-lg text-gta-purple max-w-2xl mx-auto">
            در سه قدم ساده وارد دنیای GTA شوید
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="gta-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="w-16 h-16 bg-gradient-to-br from-gta-purple to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${step.icon} text-white text-2xl`}></i>
              </div>
              
              {/* Step Title */}
              <h3 className="text-xl font-bold text-gta-dark mb-3">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-gta-purple mb-4 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Server Address (only for step 3) */}
              {step.serverAddress && (
                <div className="mb-4">
                  <div className="bg-gta-purple/10 p-3 rounded-lg mb-2">
                    <p className="text-lg font-bold text-gta-purple">
                      {step.serverAddress}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {step.serverIP}
                  </p>
                </div>
              )}
              
              {/* Step Button */}
              <Button className="gta-button w-full">
                <i className={step.buttonIcon}></i>
                {step.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Video Tutorial */}
        <div className="max-w-4xl mx-auto">
          <div className="gta-card p-8 text-center">
            <div className="relative bg-black/20 rounded-xl overflow-hidden mb-4">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gta-purple/20 to-accent/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                    <i className="fas fa-play text-white text-2xl"></i>
                  </div>
                  <p className="text-white text-lg">ویدئو آموزشی</p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gta-dark bg-gta-dark/10 p-3 rounded-lg">
              آموزش تصویری دانلود و ورود به سرور
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;