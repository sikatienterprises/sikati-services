import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Emergency from "./pages/Emergency";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashoard";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import EmergencyRequestDetails from "./components/Admin/EmergencyRequestDetails";
import QuoteDetails from "./components/Admin/QuoteDetails";
import AdminLayout from "./layouts/AdminLayout";

const queryClient = new QueryClient();

// Root layout wrapper
const RootLayout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/services", element: <Services /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/quote", element: <Quote /> },
      { path: "/emergency", element: <Emergency /> },
      { path: "/login", element: <Login /> },
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <AdminDashboard />,
          },
          {
            path: "emergency-request/:id",
            element: <EmergencyRequestDetails />,
          },
          { path: "quote/:id", element: <QuoteDetails /> },
        ],
      },
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <RouterProvider router={router} />
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
