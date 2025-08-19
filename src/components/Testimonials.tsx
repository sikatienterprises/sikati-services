import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Event Manager, City of Austin",
      company: "Austin Government",
      content: "StaffPro Solutions provided exceptional service for our annual city conference. Their team was professional, punctual, and exceeded our expectations. The coordination was seamless.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Michael Rodriguez", 
      role: "Operations Director",
      company: "TechCorp Industries",
      content: "When we needed 50 staff members for our product launch in just 48 hours, StaffPro delivered. Their emergency response team saved our event. Absolutely professional service.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Emily Thompson",
      role: "HR Director",
      company: "Global Events Inc.",
      content: "We've been working with StaffPro for over 3 years. Their consistency, quality of staff, and reliability make them our go-to staffing partner for all major events.",
      rating: 5,
      image: "👩‍💻"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-corporate mb-6">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients say about 
            our staffing solutions and professional service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-corporate">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-muted/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-corporate mb-4">Certified & Trusted</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">A+</div>
              <div className="text-sm text-muted-foreground">BBB Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">ISO</div>
              <div className="text-sm text-muted-foreground">Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$5M</div>
              <div className="text-sm text-muted-foreground">Insurance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;