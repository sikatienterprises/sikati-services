import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Search, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Request & Consultation",
      description: "Tell us your staffing needs - event type, date, skills required, and team size. Our experts will assess your requirements within hours.",
      timeline: "Response in 2-4 hours"
    },
    {
      step: "02", 
      icon: Search,
      title: "Team Selection",
      description: "We match qualified professionals from our vetted pool based on your specific requirements, location, and industry needs.",
      timeline: "Team matched within 24 hours"
    },
    {
      step: "03",
      icon: Users,
      title: "Deployment & Management",
      description: "Your dedicated team arrives on-site, fully briefed and equipped. We provide ongoing support and supervision throughout the engagement.",
      timeline: "Ready to work on your schedule"
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Continuous monitoring, feedback collection, and performance evaluation ensure exceptional service delivery and client satisfaction.",
      timeline: "Ongoing support & follow-up"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-corporate mb-6">
            Simple Process, Professional Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures you get the right team quickly and efficiently, 
            with full support from start to finish.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary-glow z-0" 
                     style={{ width: 'calc(100% - 2rem)', marginLeft: '1rem' }} />
              )}
              
              <Card className="relative z-10 bg-background border-0 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-corporate text-corporate-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-corporate mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="inline-flex items-center text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {step.timeline}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-medium">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-corporate mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us handle your staffing needs while you focus on what matters most. 
              Get a custom quote in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <Link to="/quote">
                  Get Your Quote Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">
                  Speak with Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;