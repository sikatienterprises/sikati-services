import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/Admin/AdminSidebar";
import { QuotesTable } from "@/components/Admin/QuotesTable";
import { EmergencyRequestsTable } from "@/components/Admin/EmergencyRequestsTable";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("quotes");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">
                Admin Panel
              </h1>
              <p className="text-muted-foreground">
                Manage quotes and emergency requests
              </p>
            </div>

            {activeTab === "quotes" && <QuotesTable />}
            {activeTab === "emergency" && <EmergencyRequestsTable />}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminPanel;
