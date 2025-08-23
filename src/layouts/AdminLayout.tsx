import { useAuth } from "@/context/AuthProvider";
import { Navigate, Outlet } from "react-router";

const AdminLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
