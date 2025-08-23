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
  Clock,
  Users,
  AlertTriangle,
  Briefcase,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  deleteEmergencyRequest,
  getEmergencyRequest,
  updateEmergencyRequest,
} from "@/api";

interface EmergencyRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  urgency: string;
  staffNeeded: number;
  location: string;
  startDateTime: string;
  duration: string;
  workType: string;
  emergencyDescription: string;
  specialRequirements: string;
  contact: string;
  createdAt: string;
}

export default function EmergencyRequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [editData, setEditData] = useState<EmergencyRequest | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const { data: request, isLoading } = useQuery<EmergencyRequest>({
    queryKey: ["emergencyRequest", id],
    queryFn: async () => {
      const data = await getEmergencyRequest(id);
      setEditData(data);
      return data;
    },
  });

  const mutate = useMutation({
    mutationFn: async (data: EmergencyRequest) => {
      const response = await updateEmergencyRequest(id, data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["emergencyRequest", id],
      });
      toast({
        title: "Emergency Request Updated",
        description: "Emergency request has been successfully updated.",
      });
      setEditDialogOpen(false);
    },
  });

  const handleDelete = async () => {
    await deleteEmergencyRequest(id);
    toast({
      title: "Emergency Request Deleted",
      description: "Emergency request has been successfully deleted.",
      variant: "destructive",
    });
    setDeleteDialogOpen(false);
    navigate("/admin");
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "immediate":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "same-day":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "next-day":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "within-week":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getWorkTypeColor = (type: string) => {
    switch (type) {
      case "technical":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "security":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "general":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      case "hospitality":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
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

  if (!request) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="p-6">
            <p>Emergency request not found.</p>
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
                Edit Request
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Edit Emergency Request</DialogTitle>
                <DialogDescription>
                  Make changes to the emergency request details below.
                </DialogDescription>
              </DialogHeader>
              {editData && (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Contact Name</Label>
                      <Input
                        id="name"
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={editData.company}
                        onChange={(e) =>
                          setEditData({ ...editData, company: e.target.value })
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
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency</Label>
                      <Select
                        value={editData.urgency}
                        onValueChange={(value) =>
                          setEditData({ ...editData, urgency: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate</SelectItem>
                          <SelectItem value="same-day">Same Day</SelectItem>
                          <SelectItem value="next-day">Next Day</SelectItem>
                          <SelectItem value="within-week">
                            Within Week
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workType">Work Type</Label>
                      <Select
                        value={editData.workType}
                        onValueChange={(value) =>
                          setEditData({ ...editData, workType: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical</SelectItem>
                          <SelectItem value="security">Security</SelectItem>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="hospitality">
                            Hospitality
                          </SelectItem>
                        </SelectContent>
                      </Select>
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
                  <div className="grid grid-cols-2 gap-4">
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
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDateTime">Start Date & Time</Label>
                    <Input
                      id="startDateTime"
                      type="datetime-local"
                      value={editData.startDateTime.slice(0, 16)}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          startDateTime: e.target.value + ":00.000Z",
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyDescription">
                      Emergency Description
                    </Label>
                    <Textarea
                      id="emergencyDescription"
                      value={editData.emergencyDescription}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          emergencyDescription: e.target.value,
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
                Delete Request
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Emergency Request</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this emergency request? This
                  action cannot be undone.
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
                  Delete Request
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              Emergency Request Details
            </CardTitle>
            <div className="flex gap-2">
              <Badge className={getUrgencyColor(request.urgency)}>
                <Clock className="w-3 h-3 mr-1" />
                {request.urgency}
              </Badge>
              <Badge className={getWorkTypeColor(request.workType)}>
                {request.workType}
              </Badge>
            </div>
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
                    <p className="font-medium">{request.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {request.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-medium">{request.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{request.company}</p>
                    <p className="text-sm text-muted-foreground">
                      Preferred Contact: {request.contact}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-medium">{request.location}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Start Time</h4>
              </div>
              <p>{formatDateTime(request.startDateTime)}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Duration</h4>
              </div>
              <Badge variant="outline" className="text-sm">
                {request.duration}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Staff Needed</h4>
              </div>
              <p className="text-2xl font-bold text-primary">
                {request.staffNeeded}
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-semibold text-destructive flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Emergency Description
            </h4>
            <p className="text-muted-foreground bg-destructive/5 border border-destructive/20 p-4 rounded-lg">
              {request.emergencyDescription}
            </p>
          </div>

          {request.specialRequirements && (
            <>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-semibold">Special Requirements</h4>
                <p className="text-muted-foreground bg-muted p-4 rounded-lg">
                  {request.specialRequirements}
                </p>
              </div>
            </>
          )}

          <Separator />

          <div className="text-sm text-muted-foreground">
            <p>Created: {formatDateTime(request.createdAt)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
