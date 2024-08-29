import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import HeaderCampaign from "./HeaderCampaign";
import CampaignComponent from "./CampaignComponent";

const Campaign = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <HeaderCampaign sidebarOpen={isSidebarOpen} />
      <CampaignComponent isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default Campaign;
