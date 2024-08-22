import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Campaign from "./pages/campaign/Campaign";
import Account from "./pages/account/Account";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/campaigns" element={<Campaign />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
};

export default App;
