
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/auth/PrivateRoute";

// Create placeholder pages for instructor dashboard
import InstructorDashboard from "./pages/InstructorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
          
          {/* Protected Student Routes */}
          <Route element={<PrivateRoute role="student" />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
          </Route>
          
          {/* Protected Instructor Routes */}
          <Route element={<PrivateRoute role="instructor" />}>
            <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
          </Route>
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
