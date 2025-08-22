import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Clock, AlertTriangle, Zap } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  urgency: z
    .enum(["immediate", "same-day", "next-day", "weekend"])
    .describe("Please select urgency level"),
  staffNeeded: z.number().min(1, "At least 1 staff member is required"),
  location: z.string().min(1, "Location is required"),
  startDateTime: z.string().min(1, "Start date/time is required"),
  duration: z
    .enum(["few-hours", "half-day", "full-day", "multiple-days", "ongoing"])
    .describe("Please select duration"),
  workType: z
    .enum([
      "event-support",
      "security",
      "labor",
      "admin",
      "technical",
      "cleaning",
      "other",
    ])
    .describe("Please select work type"),
  emergencyDescription: z.string().min(1, "Description is required"),
  specialRequirements: z.string().optional(),
  contact: z
    .enum(["call", "text", "email"])
    .describe("Please select contact preference"),
});

type FormValues = z.infer<typeof formSchema>;

const Emergency = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      staffNeeded: 1,
      location: "",
      startDateTime: "",
      emergencyDescription: "",
      specialRequirements: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact/emergency`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
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
              Need staff immediately? We're available 24/7 for urgent staffing
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-destructive hover:bg-white/90"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white transition-colors duration-600 text-black hover:text-white hover:bg-white/10"
              >
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
                  <div className="text-2xl font-bold text-corporate">
                    15 min
                  </div>
                  <div className="text-muted-foreground">
                    Average Response Time
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Zap className="w-8 h-8 text-destructive" />
                <div>
                  <div className="text-2xl font-bold text-corporate">
                    2 hours
                  </div>
                  <div className="text-muted-foreground">
                    Average Deployment
                  </div>
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
                  Complete this form for immediate assistance. We'll respond
                  within 15 minutes.
                </p>
              </CardHeader>

              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="space-y-8 p-8">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-corporate border-b pb-2">
                      Contact Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <Input
                          placeholder="Full name"
                          required
                          className="border-destructive/30"
                          {...register("name", {
                            required: true,
                            minLength: 2,
                          })}
                        />
                        {errors.name && (
                          <span className="text-red-500 text-sm">
                            {errors.name && <span>Name is required</span>}
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          required
                          className="border-destructive/30"
                          {...register("phone", { required: true })}
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-sm">
                            {errors.phone && (
                              <span>Phone number is required</span>
                            )}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          placeholder="emergency@company.com"
                          required
                          className="border-destructive/30"
                          {...register("email", {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          })}
                        />
                        {errors.email && (
                          <span className="text-red-500 text-sm">
                            {errors.email && (
                              <span>Valid email is required</span>
                            )}
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company/Organization *
                        </label>
                        <Input
                          placeholder="Company name"
                          required
                          className="border-destructive/30"
                          {...register("company", { required: true })}
                        />
                        {errors.company && (
                          <span className="text-red-500 text-sm">
                            {errors.company && (
                              <span>Company/Organization is required</span>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Emergency Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-corporate border-b pb-2">
                      Emergency Details
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Urgency Level *
                      </label>
                      <Controller
                        control={control}
                        name="urgency"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="border-destructive/30">
                              <SelectValue placeholder="Select urgency level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">
                                Immediate (Within 2 hours)
                              </SelectItem>
                              <SelectItem value="same-day">Same Day</SelectItem>
                              <SelectItem value="next-day">Next Day</SelectItem>
                              <SelectItem value="weekend">
                                This Weekend
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.urgency && (
                        <span className="text-red-500 text-sm">
                          {errors.urgency.message}
                        </span>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Number of Staff Needed *
                        </label>
                        <Input
                          type="number"
                          placeholder="e.g., 5"
                          min="1"
                          required
                          className="border-destructive/30"
                          {...register("staffNeeded", {
                            required: true,
                            min: 1,
                          })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Location *
                        </label>
                        <Input
                          placeholder="Address or area"
                          required
                          className="border-destructive/30"
                          {...register("location", { required: true })}
                        />
                        {errors.location && (
                          <span className="text-red-500 text-sm">
                            {errors.location && (
                              <span>Location is required</span>
                            )}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Start Date/Time *
                        </label>
                        <Input
                          type="datetime-local"
                          required
                          className="border-destructive/30"
                          {...register("startDateTime", { required: true })}
                        />
                        {errors.startDateTime && (
                          <span className="text-red-500 text-sm">
                            {errors.startDateTime && (
                              <span>Start Date/Time is required</span>
                            )}
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Expected Duration *
                        </label>
                        <Controller
                          control={control}
                          name="duration"
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="border-destructive/30">
                                <SelectValue placeholder="Duration" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="few-hours">
                                  Few Hours
                                </SelectItem>
                                <SelectItem value="half-day">
                                  Half Day
                                </SelectItem>
                                <SelectItem value="full-day">
                                  Full Day
                                </SelectItem>
                                <SelectItem value="multiple-days">
                                  Multiple Days
                                </SelectItem>
                                <SelectItem value="ongoing">Ongoing</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.duration && (
                          <span className="text-red-500 text-sm">
                            {errors.duration.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-corporate border-b pb-2">
                      Requirements
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Type of Work/Event *
                      </label>
                      <Controller
                        control={control}
                        name="workType"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="border-destructive/30">
                              <SelectValue placeholder="Select work type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="event-support">
                                Event Support
                              </SelectItem>
                              <SelectItem value="security">
                                Security Services
                              </SelectItem>
                              <SelectItem value="labor">
                                General Labor
                              </SelectItem>
                              <SelectItem value="admin">
                                Administrative Support
                              </SelectItem>
                              <SelectItem value="technical">
                                Technical Support
                              </SelectItem>
                              <SelectItem value="cleaning">
                                Cleaning Services
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.workType && (
                        <span className="text-red-500 text-sm">
                          {errors.workType.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Describe the Emergency Situation *
                      </label>
                      <Textarea
                        placeholder="Please provide details about what happened and what support you need..."
                        className="min-h-[120px] border-destructive/30"
                        required
                        {...register("emergencyDescription", {
                          required: true,
                        })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Special Requirements or Skills Needed
                      </label>
                      <Textarea
                        placeholder="Any certifications, skills, or special requirements..."
                        className="border-destructive/30"
                        {...register("specialRequirements")}
                      />
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-destructive/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-destructive mb-4">
                      Emergency Contact Preference
                    </h4>
                    <Controller
                      control={control}
                      name="contact"
                      render={({ field }) => (
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <input
                              type="radio"
                              id="call"
                              value="call"
                              checked={field.value === "call"}
                              onChange={() => field.onChange("call")}
                              className="text-destructive"
                            />
                            <label htmlFor="call">Call me immediately</label>
                          </div>
                          <div className="flex items-center space-x-4">
                            <input
                              type="radio"
                              id="text"
                              value="text"
                              checked={field.value === "text"}
                              onChange={() => field.onChange("text")}
                              className="text-destructive"
                            />
                            <label htmlFor="text">Send SMS updates</label>
                          </div>
                          <div className="flex items-center space-x-4">
                            <input
                              type="radio"
                              id="email"
                              value="email"
                              checked={field.value === "email"}
                              onChange={() => field.onChange("email")}
                              className="text-destructive"
                            />
                            <label htmlFor="email">Email response</label>
                          </div>
                          {errors.contact && (
                            <span className="text-red-500 text-sm">
                              {errors.contact.message}
                            </span>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="text-center space-y-4 pt-8">
                    <Button
                      variant="emergency"
                      size="lg"
                      className="w-full md:w-auto px-12"
                    >
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
                      Emergency requests are prioritized and responded to within
                      15 minutes, 24/7.
                    </p>
                  </div>
                </CardContent>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Emergency;
