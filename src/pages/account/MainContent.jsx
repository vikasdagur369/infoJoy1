import React, { useState } from "react";
import "./YourStylesheet.css"; // Import the custom stylesheet

const MainContent = () => {
  const [campaign, setCampaign] = useState("simran1");

  const handleCampaignChange = (e) => {
    setCampaign(e.target.value);
  };

  return (
    <div className="campaign-container">
      <div className="campaign-header">
        <div className="campaign-list">
          <label htmlFor="campaignList">Campaign List</label>
          <select
            id="campaignList"
            value={campaign}
            onChange={handleCampaignChange}
          >
            <option value="simran1">simran1</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="campaign-body">
        <div className="query-section">
          <div className="triggers">
            <h4>Triggers</h4>
            <ul>
              <li>
                Categories: <span>0</span>
              </li>
              <li>
                Competitors: <span>0</span>
              </li>
              <li>
                Keywords: <span>0</span>
              </li>
              <li>
                Events: <span>0</span>
              </li>
            </ul>
          </div>

          <div className="filters">
            <h4>Filters</h4>
            <ul>
              <li>
                Locations: <span>1</span>
              </li>
              <li>
                Company Sizes: <span>0</span>
              </li>
              <li>
                Industries: <span>0</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="results-section">
          <div className="export-buttons">
            <button className="export-btn">Export</button>
            <button className="custom-export-btn">Custom Export</button>
          </div>
          <table className="results-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Company Name</th>
                <th>Domain</th>
                <th>Trigger</th>
                <th>Trigger Type</th>
                <th>Timestamp</th>
                <th>Industry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="no-data">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
