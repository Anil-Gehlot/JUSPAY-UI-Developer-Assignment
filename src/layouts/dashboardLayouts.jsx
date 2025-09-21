import { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import RightSidebar from "../components/right-side-bar/RightSidebar";
import Sidebar from "../components/left-side-bar/sidebar";
import "./dashboardLayout.css";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function DashboardLayout({ children }) {
  const width = useWindowWidth();

  const [isSidebarVisible, setIsSidebarVisible] = useState(width > 768);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(width > 768);

  useEffect(() => {
    if (width <= 1080) {
      setIsSidebarVisible(false);
      setIsRightSidebarVisible(false);
    } else {
      setIsSidebarVisible(true);
      setIsRightSidebarVisible(true);
    }
  }, [width]);

  const toggleSidebar = () => {
    if (width <= 1080) {
      setIsSidebarVisible((prev) => !prev);
      setIsRightSidebarVisible(false);
    } else {
      setIsSidebarVisible((prev) => !prev);
    }
  };

  const toggleRightSidebar = () => {
    if (width <= 1080) {
      setIsRightSidebarVisible((prev) => !prev);
      setIsSidebarVisible(false);
    } else {
      setIsRightSidebarVisible((prev) => !prev);
    }
  };

  return (
    <div className="dashboard-layout">
      <div className={width <= 1080 ? "sidebar-div" : ""}>
        {isSidebarVisible && <Sidebar />}
      </div>
      <main className="content">
        <Navbar
          toggleSidebar={toggleSidebar}
          toggleRightSidebar={toggleRightSidebar}
        />
        <div className="main-content">{children}</div>
      </main>
      <div className={width <= 1080 ? "sidebar-div2" : ""}>
        {isRightSidebarVisible && <RightSidebar />}
      </div>
    </div>
  );
}

export default DashboardLayout;
