import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "./DataTable";
import Header from "./Header";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Header isSidebarOpen={isSidebarOpen} />
      <DataTable isSidebarOpen={isSidebarOpen} />{" "}
    </>
  );
};

export default Dashboard;
