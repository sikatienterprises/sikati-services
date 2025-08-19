import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroTeam from "@/assets/hero-team.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background/95 to-background/90 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-900/80 text-foreground overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
        style={{ backgroundImage: `url(${heroTeam})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-corporate/80 to-primary/60 dark:from-corporate/30 dark:to-primary/30" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Professional Teams
              <span className="block text-primary-glow dark:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]">
                When You Need Them
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-foreground/90 dark:text-foreground/80 max-w-2xl">
              Reliable staffing solutions for government events, corporate
              functions, and business operations. Available 24/7 for emergency
              requests.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="animate-slide-up flex flex-wrap gap-8 mb-10 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-success" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-success" />
              <span>2,000+ Events Staffed</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-success" />
              <span>Fully Insured & Bonded</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-success" />
              <span>24/7 Emergency Response</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-scale-in flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link to="/quote">
                Get Instant Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="emergency"
              size="lg"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link to="/emergency">
                Emergency Staffing
                <Clock className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-primary-glow dark:text-primary/90 mb-2">
                2-4
              </div>
              <div className="text-sm text-primary-foreground/80">
                Hours Response Time
              </div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-primary-glow dark:text-primary/90 mb-2">
                500+
              </div>
              <div className="text-sm text-primary-foreground/80">
                Qualified Staff
              </div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-primary-glow dark:text-primary/90 mb-2">
                98%
              </div>
              <div className="text-sm text-primary-foreground/80">
                Success Rate
              </div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-primary-glow dark:text-primary/90 mb-2">
                24/7
              </div>
              <div className="text-sm text-primary-foreground/80">
                Availability
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
