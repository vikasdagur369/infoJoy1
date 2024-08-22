import React, { useState } from "react";

const CampaignComponent = ({ isSidebarOpen }) => {
  const [activeTab, setActiveTab] = useState("TRIGGERS");

  return (
    <div
      style={{
        width: isSidebarOpen ? "calc(100% - 250px)" : "100%",
        marginLeft: isSidebarOpen ? "250px" : "0",
        transition: "margin-left 0.3s ease, width 0.3s ease",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#2d2d2d",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <select
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="simran1">simran1</option>
        </select>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4a5cf5",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          New Campaign
        </button>
      </div>

      <div
        style={{
          display: "flex",
          borderBottom: "2px solid #ccc",
          marginBottom: "20px",
        }}
      >
        <div
          onClick={() => setActiveTab("TRIGGERS")}
          style={{
            marginRight: "20px",
            paddingBottom: "10px",
            cursor: "pointer",
            borderBottom:
              activeTab === "TRIGGERS" ? "3px solid #4a5cf5" : "none",
            color: activeTab === "TRIGGERS" ? "#2d2d2d" : "#888",
          }}
        >
          TRIGGERS
        </div>
        <div
          onClick={() => setActiveTab("FIRMOGRAPHICS")}
          style={{
            paddingBottom: "10px",
            cursor: "pointer",
            borderBottom:
              activeTab === "FIRMOGRAPHICS" ? "3px solid #4a5cf5" : "none",
            color: activeTab === "FIRMOGRAPHICS" ? "#2d2d2d" : "#888",
          }}
        >
          FIRMOGRAPHICS
        </div>
      </div>

      {activeTab === "TRIGGERS" ? (
        <div>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <input type="checkbox" style={{ marginRight: "10px" }} />
            <span>Check to get latest data</span>
          </label>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
              CATEGORIES
            </label>
            <input
              type="text"
              readOnly
              placeholder="This widget is read-only. If you would like to add or remove an item, please contact support@marketjoy.com"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginBottom: "5px",
                backgroundColor: "#f7f7f7",
              }}
            />
          </div>
          {["ENGAGED WITH COMPETITORS", "KEYWORD", "HIRING", "EVENTS"].map(
            (label, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  {label}
                </label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="text"
                    style={{
                      flexGrow: 1,
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      marginRight: "10px",
                    }}
                  />
                  <button
                    style={{
                      padding: "10px 20px",
                      fontSize: "14px",
                      backgroundColor: "#4a5cf5",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div>
          {["LOCATION", "COMPANY SIZE", "INDUSTRY"].map((label, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
                {label}
              </label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  style={{
                    flexGrow: 1,
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginRight: "10px",
                  }}
                />
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "14px",
                    backgroundColor: "#4a5cf5",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CampaignComponent;
