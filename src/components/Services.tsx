import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Calendar,
  ShieldCheck,
  Wrench,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Government Events",
      description:
        "Professional staff for official ceremonies, conferences, and public functions",
      features: [
        "Security clearance available",
        "Protocol training",
        "Formal dress code",
        "Multilingual staff",
      ],
    },
    {
      icon: Calendar,
      title: "Corporate Events",
      description:
        "Expert teams for conferences, product launches, and business functions",
      features: [
        "Tech-savvy staff",
        "Brand representation",
        "Setup & breakdown",
        "Audio/visual support",
      ],
    },
    {
      icon: Users,
      title: "Temporary Labor",
      description:
        "Skilled workers for construction, warehouse, and manual labor projects",
      features: [
        "Safety certified",
        "Equipment provided",
        "Flexible scheduling",
        "Quality supervision",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Security Services",
      description: "Licensed security personnel for events and facilities",
      features: [
        "Licensed professionals",
        "Background checked",
        "Emergency response",
        "Crowd management",
      ],
    },
    {
      icon: Wrench,
      title: "Specialized Teams",
      description: "Technical experts for specific industry requirements",
      features: [
        "Industry expertise",
        "Certified technicians",
        "Equipment specialists",
        "Project management",
      ],
    },
    {
      icon: Clock,
      title: "Emergency Staffing",
      description: "Rapid deployment teams for urgent staffing needs",
      features: [
        "2-4 hour response",
        "24/7 availability",
        "Pre-vetted teams",
        "Crisis management",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-corporate mb-6">
            Comprehensive Staffing Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From government ceremonies to corporate events, we provide the right
            people with the right skills at the right time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-corporate">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
