import React, { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Layouts() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="d-flex flex-column vh-100">
      {/* Header with toggle */}
      <Header toggleSidebar={toggleSidebar} />

      <div className="d-flex text-center flex-grow-1 vh-100">
        {/* Conditional Sidebar */}
        {isSidebarOpen && <Sidebar />}

        {/* Main content */}
        <div className="d-flex flex-column flex-grow-1 overflow-auto">
          <div className="flex-grow-1 p-3 bg-light">
            <Outlet />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layouts;
