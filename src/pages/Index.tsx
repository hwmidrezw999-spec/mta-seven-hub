import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import InstallationGuide from "@/components/InstallationGuide";
import AboutUs from "@/components/AboutUs";
import TeamMembers from "@/components/TeamMembers";
import FAQContact from "@/components/FAQContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <InstallationGuide />
      <AboutUs />
      <TeamMembers />
      <FAQContact />
      <Footer />
      {/* Mobile Navigation Padding */}
      <div className="md:hidden h-20"></div>
    </div>
  );
};

export default Index;
