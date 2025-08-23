import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Mail, Phone, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getEmergencyContacts } from "@/api";
import { Link } from "react-router";

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

export function EmergencyRequestsTable() {
  const { data: emergencies, isLoading: loading } = useQuery({
    queryKey: ["emergencyContacts"],
    queryFn: getEmergencyContacts,
  });

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
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

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Emergency Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Emergency Requests ({emergencies.length})</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Urgency</TableHead>
                <TableHead>Staff Needed</TableHead>
                <TableHead>Work Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emergencies.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">{request.name}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        <span className="truncate max-w-[150px]">
                          {request.email}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        <span>{request.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {request.company}
                  </TableCell>
                  <TableCell>
                    <Badge className={getUrgencyColor(request.urgency)}>
                      <Clock className="w-3 h-3 mr-1" />
                      {request.urgency}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {request.staffNeeded}
                  </TableCell>
                  <TableCell>
                    <Badge className={getWorkTypeColor(request.workType)}>
                      {request.workType}
                    </Badge>
                  </TableCell>
                  <TableCell>{request.location}</TableCell>
                  <TableCell className="text-sm">
                    {formatDateTime(request.startDateTime)}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{request.duration}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-[200px]">
                      <p
                        className="text-sm truncate"
                        title={request.emergencyDescription}
                      >
                        {request.emergencyDescription}
                      </p>
                      {request.specialRequirements && (
                        <p
                          className="text-xs text-muted-foreground truncate mt-1"
                          title={request.specialRequirements}
                        >
                          Special: {request.specialRequirements}
                        </p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDateTime(request.createdAt)}
                  </TableCell>
                  <TableCell>
                    <Link to={`/admin/emergency-request/${request.id}`}>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
