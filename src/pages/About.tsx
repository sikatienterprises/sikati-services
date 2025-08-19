import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Clients Served", value: "500+" },
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: Award, label: "Success Rate", value: "98%" },
    { icon: Shield, label: "Certified Staff", value: "100%" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-primary-glow">StaffPro Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Your trusted partner in professional staffing solutions for over 15 years
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-corporate mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate mb-8">
                Our Story
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Founded in 2009, StaffPro Solutions began with a simple mission: to bridge the gap between businesses in need and qualified professionals ready to serve. What started as a small local operation has grown into a trusted partner for government agencies, corporations, and event organizers nationwide.
                </p>
                <p>
                  Our commitment to excellence, rigorous vetting processes, and 24/7 availability has earned us the trust of over 500 clients. We understand that every staffing need is unique, which is why we take a personalized approach to every request.
                </p>
                <p>
                  Today, we continue to innovate and expand our services while maintaining the personal touch and reliability that our clients have come to expect.
                </p>
              </div>
              <div className="mt-12">
                <Button variant="hero" size="lg">
                  Work With Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;