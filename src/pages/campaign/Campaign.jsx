import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import HeaderCampaign from "./HeaderCampaign";
import CampaignComponent from "./CampaignComponent";

const Campaign = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <HeaderCampaign />
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <CampaignComponent isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default Campaign;
