import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Users, Clock, MapPin } from "lucide-react";
import { createQuote } from "@/api";
import { useMutation } from "@tanstack/react-query";

const quoteFormSchema = z.object({
  contactName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  eventType: z
    .enum([
      "government",
      "corporate",
      "private",
      "construction",
      "security",
      "hospitality",
      "other",
    ])
    .describe("Please select event type"),
  startDate: z.string().min(1, "Start date is required"),
  duration: z
    .enum(["1day", "2-3days", "1week", "2weeks", "1month", "ongoing"])
    .optional(),
  staffNeeded: z.number().min(1, "At least 1 staff member is required"),
  location: z.string().min(1, "Location is required"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  specialRequirements: z.string().optional(),
  budgetRange: z
    .enum(["under5k", "5k-10k", "10k-25k", "25k-50k", "over50k", "discuss"])
    .optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const Quote = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (data: QuoteFormValues) => createQuote(data),
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      contactName: "",
      companyName: "",
      email: "",
      phone: "",
      staffNeeded: 1,
      services: [],
      specialRequirements: "",
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    mutate(data);
  };

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
              Tell us about your staffing needs and we'll provide a customized
              solution.
            </p>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="shadow-large">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-corporate">
                  Request a Quote
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 1
                  hour.
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Contact Name *
                      </label>
                      <Input
                        {...register("contactName")}
                        placeholder="Your full name"
                        className={errors.contactName ? "border-red-500" : ""}
                      />
                      {errors.contactName && (
                        <span className="text-red-500 text-sm">
                          {errors.contactName.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name *
                      </label>
                      <Input
                        {...register("companyName")}
                        placeholder="Your company"
                        className={errors.companyName ? "border-red-500" : ""}
                      />
                      {errors.companyName && (
                        <span className="text-red-500 text-sm">
                          {errors.companyName.message}
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
                        {...register("email")}
                        type="email"
                        placeholder="contact@company.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone *
                      </label>
                      <Input
                        {...register("phone")}
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-sm">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Event Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-corporate">
                      Event Details
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Event Type *
                      </label>
                      <Controller
                        control={control}
                        name="eventType"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              className={
                                errors.eventType ? "border-red-500" : ""
                              }
                            >
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="government">
                                Government Event
                              </SelectItem>
                              <SelectItem value="corporate">
                                Corporate Event
                              </SelectItem>
                              <SelectItem value="private">
                                Private Event
                              </SelectItem>
                              <SelectItem value="construction">
                                Construction Project
                              </SelectItem>
                              <SelectItem value="security">
                                Security Services
                              </SelectItem>
                              <SelectItem value="hospitality">
                                Hospitality Services
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.eventType && (
                        <span className="text-red-500 text-sm">
                          {errors.eventType.message}
                        </span>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Start Date *
                        </label>
                        <Input
                          {...register("startDate")}
                          type="date"
                          className={errors.startDate ? "border-red-500" : ""}
                        />
                        {errors.startDate && (
                          <span className="text-red-500 text-sm">
                            {errors.startDate.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <Clock className="w-4 h-4 inline mr-2" />
                          Duration
                        </label>
                        <Controller
                          control={control}
                          name="duration"
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || ""}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select duration" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1day">1 Day</SelectItem>
                                <SelectItem value="2-3days">
                                  2-3 Days
                                </SelectItem>
                                <SelectItem value="1week">1 Week</SelectItem>
                                <SelectItem value="2weeks">2 Weeks</SelectItem>
                                <SelectItem value="1month">1 Month</SelectItem>
                                <SelectItem value="ongoing">Ongoing</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <Users className="w-4 h-4 inline mr-2" />
                          Number of Staff Needed *
                        </label>
                        <Input
                          {...register("staffNeeded", { valueAsNumber: true })}
                          type="number"
                          placeholder="e.g., 20"
                          min="1"
                          className={errors.staffNeeded ? "border-red-500" : ""}
                        />
                        {errors.staffNeeded && (
                          <span className="text-red-500 text-sm">
                            {errors.staffNeeded.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <MapPin className="w-4 h-4 inline mr-2" />
                          Location *
                        </label>
                        <Input
                          {...register("location")}
                          placeholder="City, State"
                          className={errors.location ? "border-red-500" : ""}
                        />
                        {errors.location && (
                          <span className="text-red-500 text-sm">
                            {errors.location.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>{" "}
                  {/* Service Requirements */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-corporate">
                      Service Requirements
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-4">
                        Services Needed (Select all that apply) *
                      </label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Controller
                          control={control}
                          name="services"
                          render={({ field }) => (
                            <>
                              {[
                                "General Labor",
                                "Event Staff",
                                "Security Personnel",
                                "Technical Support",
                                "Administrative Staff",
                                "Hospitality Services",
                                "Specialized Skills",
                                "Emergency Coverage",
                              ].map((service) => (
                                <div
                                  key={service}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={service}
                                    checked={field.value?.includes(service)}
                                    onCheckedChange={(checked) => {
                                      const updatedServices = checked
                                        ? [...(field.value || []), service]
                                        : field.value?.filter(
                                            (s) => s !== service
                                          ) || [];
                                      field.onChange(updatedServices);
                                    }}
                                  />
                                  <label
                                    htmlFor={service}
                                    className="text-sm text-foreground"
                                  >
                                    {service}
                                  </label>
                                </div>
                              ))}
                            </>
                          )}
                        />
                      </div>
                      {errors.services && (
                        <span className="text-red-500 text-sm block mt-2">
                          {errors.services.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Special Requirements
                      </label>
                      <Textarea
                        {...register("specialRequirements")}
                        placeholder="Please describe any special skills, certifications, or requirements needed..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget Range (Optional)
                      </label>
                      <Controller
                        control={control}
                        name="budgetRange"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value || ""}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under5k">
                                Under $5,000
                              </SelectItem>
                              <SelectItem value="5k-10k">
                                $5,000 - $10,000
                              </SelectItem>
                              <SelectItem value="10k-25k">
                                $10,000 - $25,000
                              </SelectItem>
                              <SelectItem value="25k-50k">
                                $25,000 - $50,000
                              </SelectItem>
                              <SelectItem value="over50k">
                                Over $50,000
                              </SelectItem>
                              <SelectItem value="discuss">
                                Prefer to discuss
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>
                  {/* Submit */}
                  <div className="text-center pt-8">
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="px-12"
                      disabled={isPending}
                    >
                      {isPending ? "Submitting..." : "Get My Quote"}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      We'll respond within 1 hour during business hours, or
                      first thing the next morning.
                    </p>
                  </div>
                </form>
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
