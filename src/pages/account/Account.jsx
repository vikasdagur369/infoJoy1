import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import HeaderAccount from "./HeaderAccount";
import MainContent from "./MainContent";

const Account = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <HeaderAccount sidebarOpen={isSidebarOpen} />
      <MainContent sidebarOpen={isSidebarOpen} />
    </>
  );
};

export default Account;
