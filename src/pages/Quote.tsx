import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Users, Clock, MapPin } from "lucide-react";

const Quote = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Your <span className="text-primary-glow">Quote</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Tell us about your staffing needs and we'll provide a customized solution.
            </p>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="shadow-large">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-corporate">Request a Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 1 hour.
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Contact Name *
                    </label>
                    <Input placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <Input placeholder="Your company" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="contact@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" required />
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-corporate">Event Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Event Type *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="government">Government Event</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="private">Private Event</SelectItem>
                        <SelectItem value="construction">Construction Project</SelectItem>
                        <SelectItem value="security">Security Services</SelectItem>
                        <SelectItem value="hospitality">Hospitality Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Start Date *
                      </label>
                      <Input type="date" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Duration
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1day">1 Day</SelectItem>
                          <SelectItem value="2-3days">2-3 Days</SelectItem>
                          <SelectItem value="1week">1 Week</SelectItem>
                          <SelectItem value="2weeks">2 Weeks</SelectItem>
                          <SelectItem value="1month">1 Month</SelectItem>
                          <SelectItem value="ongoing">Ongoing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Number of Staff Needed *
                      </label>
                      <Input type="number" placeholder="e.g., 20" min="1" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Location *
                      </label>
                      <Input placeholder="City, State" required />
                    </div>
                  </div>
                </div>

                {/* Service Requirements */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-corporate">Service Requirements</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-4">
                      Services Needed (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "General Labor",
                        "Event Staff",
                        "Security Personnel",
                        "Technical Support",
                        "Administrative Staff",
                        "Hospitality Services",
                        "Specialized Skills",
                        "Emergency Coverage"
                      ].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox id={service} />
                          <label htmlFor={service} className="text-sm text-foreground">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Special Requirements
                    </label>
                    <Textarea 
                      placeholder="Please describe any special skills, certifications, or requirements needed..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range (Optional)
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="over50k">Over $50,000</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit */}
                <div className="text-center pt-8">
                  <Button variant="hero" size="lg" className="px-12">
                    Get My Quote
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll respond within 1 hour during business hours, or first thing the next morning.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;