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
import { Eye, Mail, Phone } from "lucide-react";
import { getQuoteRequests } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

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

export function QuotesTable() {
  const { data: quotes, isLoading: loading } = useQuery({
    queryKey: ["quoteRequests"],
    queryFn: getQuoteRequests,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
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

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quotes</CardTitle>
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
          <span>Quotes ({quotes.length})</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Staff Needed</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Services</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">{quote.contactName}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        <span className="truncate max-w-[150px]">
                          {quote.email}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        <span>{quote.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {quote.companyName}
                  </TableCell>
                  <TableCell>
                    <Badge className={getEventTypeColor(quote.eventType)}>
                      {quote.eventType}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(quote.startDate)}</TableCell>
                  <TableCell>{quote.duration}</TableCell>
                  <TableCell className="text-center font-semibold">
                    {quote.staffNeeded}
                  </TableCell>
                  <TableCell>{quote.location}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{quote.budgetRange}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {quote.services.slice(0, 2).map((service, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {service}
                        </Badge>
                      ))}
                      {quote.services.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{quote.services.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(quote.createdAt)}
                  </TableCell>
                  <TableCell>
                    <Link to={`/admin/quote/${quote.id}`}>
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
