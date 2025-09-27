const TeamMembers = () => {
  const teamMembers = [
    {
      name: "DashAli",
      role: "فاندر سرور",
      icon: "fas fa-crown",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      name: "NaViD", 
      role: "اونر سرور",
      icon: "fas fa-star",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Ali",
      role: "منیجر سرور", 
      icon: "fas fa-user-tie",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sir_Matio",
      role: "هندلر",
      icon: "fas fa-cog",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Hamid",
      role: "دایرکتور",
      icon: "fas fa-briefcase", 
      gradient: "from-red-500 to-pink-500"
    },
    {
      name: "GRIFFIN",
      role: "دایرکتور",
      icon: "fas fa-briefcase",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gta-dark mb-4">
            اعضای تیم سرور
          </h2>
          <p className="text-lg text-gta-purple max-w-2xl mx-auto">
            تیم مجرب و حرفه‌ای ما در خدمت شماست
          </p>
        </div>

        {/* Desktop View - All 6 members */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="gta-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${member.icon} text-white text-3xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gta-dark mb-2">
                {member.name}
              </h3>
              
              <p className="text-gta-purple font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View - Only first 3 members */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div 
              key={index}
              className="gta-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${member.icon} text-white text-3xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gta-dark mb-2">
                {member.name}
              </h3>
              
              <p className="text-gta-purple font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;