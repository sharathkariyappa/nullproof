import Header from "./Header";
import Sidebar from "./Sidebar";
import useTheme from "@/hooks/useTheme"


const DashboardLayout = ({ children, activeItem, setActiveItem, isDarkMode, setIsDarkMode }) => {
    const theme = useTheme(isDarkMode);
  
    return (
      <div className="min-h-screen text-foreground" style={{
        background: theme.background,
        backgroundImage: theme.gradientBg,
        color: theme.foreground
      }}>
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} theme={theme} />
        <div className="ml-64">
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} />
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    );
  };

export default DashboardLayout