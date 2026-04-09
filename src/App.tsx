import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Provocations from "./pages/Provocations";
import Schedule from "./pages/Schedule";
import Organizers from "./pages/Organizers";
import Submit from "./pages/Submit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const routerBase = import.meta.env.BASE_URL?.replace(/\/$/, "") || "/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBase}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/provocations" element={<Provocations />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/organizers" element={<Organizers />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
