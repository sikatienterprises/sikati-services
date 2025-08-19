import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Clock, AlertTriangle, Zap } from "lucide-react";

const Emergency = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Emergency Hero Section */}
        <section className="py-20 bg-gradient-to-r from-destructive to-destructive/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Emergency <span className="text-yellow-300">Staffing</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
              Need staff immediately? We're available 24/7 for urgent staffing requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Zap className="w-5 h-5 mr-2" />
                Request Emergency Staff
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Stats */}
        <section className="py-12 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-4">
                <Clock className="w-8 h-8 text-destructive" />
                <div>
                  <div className="text-2xl font-bold text-corporate">15 min</div>
                  <div className="text-muted-foreground">Average Response Time</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Zap className="w-8 h-8 text-destructive" />
                <div>
                  <div className="text-2xl font-bold text-corporate">2 hours</div>
                  <div className="text-muted-foreground">Average Deployment</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <div>
                  <div className="text-2xl font-bold text-corporate">24/7</div>
                  <div className="text-muted-foreground">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="shadow-large border-destructive/20">
              <CardHeader className="text-center bg-destructive/5">
                <CardTitle className="text-3xl text-destructive flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 mr-3" />
                  Emergency Staffing Request
                </CardTitle>
                <p className="text-muted-foreground">
                  Complete this form for immediate assistance. We'll respond within 15 minutes.
                </p>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-corporate border-b pb-2">Contact Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input placeholder="Full name" required className="border-destructive/30" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" required className="border-destructive/30" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="emergency@company.com" required className="border-destructive/30" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company/Organization *
                      </label>
                      <Input placeholder="Company name" required className="border-destructive/30" />
                    </div>
                  </div>
                </div>

                {/* Emergency Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-corporate border-b pb-2">Emergency Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Urgency Level *
                    </label>
                    <Select>
                      <SelectTrigger className="border-destructive/30">
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (Within 2 hours)</SelectItem>
                        <SelectItem value="same-day">Same Day</SelectItem>
                        <SelectItem value="next-day">Next Day</SelectItem>
                        <SelectItem value="weekend">This Weekend</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Number of Staff Needed *
                      </label>
                      <Input type="number" placeholder="e.g., 5" min="1" required className="border-destructive/30" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Location *
                      </label>
                      <Input placeholder="Address or area" required className="border-destructive/30" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Start Date/Time *
                      </label>
                      <Input type="datetime-local" required className="border-destructive/30" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Expected Duration *
                      </label>
                      <Select>
                        <SelectTrigger className="border-destructive/30">
                          <SelectValue placeholder="Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="few-hours">Few Hours</SelectItem>
                          <SelectItem value="half-day">Half Day</SelectItem>
                          <SelectItem value="full-day">Full Day</SelectItem>
                          <SelectItem value="multiple-days">Multiple Days</SelectItem>
                          <SelectItem value="ongoing">Ongoing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-corporate border-b pb-2">Requirements</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Type of Work/Event *
                    </label>
                    <Select>
                      <SelectTrigger className="border-destructive/30">
                        <SelectValue placeholder="Select work type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="event-support">Event Support</SelectItem>
                        <SelectItem value="security">Security Services</SelectItem>
                        <SelectItem value="labor">General Labor</SelectItem>
                        <SelectItem value="admin">Administrative Support</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="cleaning">Cleaning Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Describe the Emergency Situation *
                    </label>
                    <Textarea 
                      placeholder="Please provide details about what happened and what support you need..."
                      className="min-h-[120px] border-destructive/30"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Special Requirements or Skills Needed
                    </label>
                    <Textarea 
                      placeholder="Any certifications, skills, or special requirements..."
                      className="border-destructive/30"
                    />
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-destructive/5 p-6 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-4">Emergency Contact Preference</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <input type="radio" name="contact" id="call" className="text-destructive" />
                      <label htmlFor="call">Call me immediately</label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input type="radio" name="contact" id="text" className="text-destructive" />
                      <label htmlFor="text">Send SMS updates</label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input type="radio" name="contact" id="email" className="text-destructive" />
                      <label htmlFor="email">Email response</label>
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="text-center space-y-4 pt-8">
                  <Button variant="emergency" size="lg" className="w-full md:w-auto px-12">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Submit Emergency Request
                  </Button>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Instead: (800) STAFFPRO
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Emergency requests are prioritized and responded to within 15 minutes, 24/7.
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

export default Emergency;