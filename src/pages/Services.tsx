import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-corporate mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive staffing solutions tailored to your specific needs. From emergency placements to long-term partnerships, we deliver excellence every time.
            </p>
          </div>
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;