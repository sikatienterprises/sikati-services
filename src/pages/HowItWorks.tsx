import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-corporate mb-6">
              How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures you get the right people at the right time, every time. Here's how we make staffing solutions simple and effective.
            </p>
          </div>
          <HowItWorks />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;