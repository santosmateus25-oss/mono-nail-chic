import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import LocationSection from "@/components/LocationSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CatalogSection />
      <LocationSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
