import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Users,
  DollarSign,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteQuote, getQuote, updateQuote } from "@/api";

interface Quote {
  id: string;
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  eventType: string;
  startDate: string;
  duration: string;
  staffNeeded: number;
  location: string;
  services: string[];
  specialRequirements: string;
  budgetRange: string;
  createdAt: string;
}

export default function QuoteDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  //   const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState<Quote | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const { data: quote, isLoading } = useQuery<Quote>({
    queryKey: ["quote", id],
    queryFn: async () => {
      const data = await getQuote(id);
      setEditData(data);
      return data;
    },
  });

  const mutate = useMutation({
    mutationFn: async (data: Quote) => {
      const response = await updateQuote(id, data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["quote", id],
      });
      toast({
        title: "Quote Updated",
        description: "Quote has been successfully updated.",
      });
      setEditDialogOpen(false);
    },
  });

  const handleDelete = async () => {
    await deleteQuote(id);
    toast({
      title: "Quote Deleted",
      description: "Quote has been successfully deleted.",
      variant: "destructive",
    });
    setDeleteDialogOpen(false);
    navigate("/admin");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "private":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "government":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "corporate":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!quote) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="p-6">
            <p>Quote not found.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate("/admin")}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Admin
        </Button>
        <div className="flex gap-2">
          <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Edit Quote</DialogTitle>
                <DialogDescription>
                  Make changes to the quote details below.
                </DialogDescription>
              </DialogHeader>
              {editData && (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name</Label>
                      <Input
                        id="contactName"
                        value={editData.contactName}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            contactName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        value={editData.companyName}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            companyName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={editData.email}
                        onChange={(e) =>
                          setEditData({ ...editData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={editData.phone}
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type</Label>
                      <Select
                        value={editData.eventType}
                        onValueChange={(value) =>
                          setEditData({ ...editData, eventType: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={editData.location}
                        onChange={(e) =>
                          setEditData({ ...editData, location: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={editData.startDate}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            startDate: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        value={editData.duration}
                        onChange={(e) =>
                          setEditData({ ...editData, duration: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="staffNeeded">Staff Needed</Label>
                      <Input
                        id="staffNeeded"
                        type="number"
                        value={editData.staffNeeded}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            staffNeeded: parseInt(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budgetRange">Budget Range</Label>
                    <Input
                      id="budgetRange"
                      value={editData.budgetRange}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          budgetRange: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialRequirements">
                      Special Requirements
                    </Label>
                    <Textarea
                      id="specialRequirements"
                      value={editData.specialRequirements}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          specialRequirements: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setEditDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => mutate.mutate(editData)}>
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive" className="gap-2">
                <Trash2 className="h-4 w-4" />
                Delete Quote
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Quote</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this quote? This action cannot
                  be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setDeleteDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDelete}>
                  Delete Quote
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Quote Details</CardTitle>
            <Badge className={getEventTypeColor(quote.eventType)}>
              {quote.eventType}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{quote.contactName}</p>
                    <p className="text-sm text-muted-foreground">
                      {quote.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-medium">{quote.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{quote.companyName}</p>
                    <p className="text-sm text-muted-foreground">
                      {quote.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Event Date</h4>
              </div>
              <p>{formatDate(quote.startDate)}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Duration</h4>
              </div>
              <p>{quote.duration}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Staff Needed</h4>
              </div>
              <p className="text-2xl font-bold text-primary">
                {quote.staffNeeded}
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <h4 className="font-semibold">Budget Range</h4>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {quote.budgetRange}
            </Badge>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-semibold">Services Required</h4>
            <div className="flex flex-wrap gap-2">
              {quote.services.map((service, index) => (
                <Badge key={index} variant="outline">
                  {service}
                </Badge>
              ))}
            </div>
          </div>

          {quote.specialRequirements && (
            <>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-semibold">Special Requirements</h4>
                <p className="text-muted-foreground bg-muted p-4 rounded-lg">
                  {quote.specialRequirements}
                </p>
              </div>
            </>
          )}

          <Separator />

          <div className="text-sm text-muted-foreground">
            <p>Created: {formatDate(quote.createdAt)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
