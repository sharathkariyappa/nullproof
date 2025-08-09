import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Whitepaper from "./pages/Whitepaper";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import EarlyAccess from "./pages/EarlyAccess";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import PortfolioPage from "./pages/PortfolioPage";
import WalletPage from "./pages/WalletPage";
import GenericPage from "./pages/GenericPage";
import useTheme from "./hooks/useTheme";

const queryClient = new QueryClient();

const App = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = useTheme(isDarkMode);

  const renderPage = () => {
    switch (activeItem) {
      case "dashboard":
        return <DashboardPage theme={theme} />;
      case "portfolio":
        return <PortfolioPage theme={theme} />;
      case "wallet":
        return <WalletPage theme={theme} />;
      case "staking":
        return <GenericPage title="Staking Pools" theme={theme} />;
      case "analytics":
        return <GenericPage title="Analytics Dashboard" theme={theme} />;
      case "governance":
        return <GenericPage title="Governance" theme={theme} />;
      case "security":
        return <GenericPage title="Security Settings" theme={theme} />;
      case "settings":
        return <GenericPage title="Settings" theme={theme} />;
      default:
        return <DashboardPage theme={theme} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/early-access" element={<EarlyAccess />} />

            {/* Dashboard & Internal Pages */}
            <Route
              path="/app"
              element={
                <DashboardLayout
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                >
                  {renderPage()}
                </DashboardLayout>
              }
            />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
