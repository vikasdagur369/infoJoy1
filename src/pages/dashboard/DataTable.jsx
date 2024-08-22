import React from "react";
import styled from "styled-components";

const DataTableWrapper = styled.div`
  transition: margin-left 0.3s ease;
  margin-left: ${(props) => (props.isSidebarOpen ? "250px" : "0")};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const DataTable = ({ isSidebarOpen }) => {
  const data = [
    {
      name: "simran1",
      date: "8/20/2024 4:51:12 PM",
      delivery: "Export",
    },
  ];

  const handleDelete = () => {
    // Handle delete functionality here
    console.log("Delete button clicked");
  };

  const styles = {
    container: {
      padding: "20px",
      margin: "40px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
      overflowX: "auto", // Allows horizontal scrolling on small screens
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    thead: {
      backgroundColor: "#f4f4f4",
      borderBottom: "2px solid black",
    },
    th: {
      padding: "10px",
      textAlign: "left",
      whiteSpace: "nowrap", // Prevents text from wrapping
    },
    tr: {
      borderBottom: "1px solid #ccc",
    },
    td: {
      padding: "10px",
    },
    button: {
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "4px",
      color: "white",
      padding: "10px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px", // Adjust font size if necessary
    },
    buttonText: {
      marginLeft: "5px",
    },
    "@media (max-width: 768px)": {
      container: {
        margin: "20px",
      },
      table: {
        display: "block",
        overflowX: "auto",
      },
      th: {
        padding: "8px",
      },
      td: {
        padding: "8px",
      },
      button: {
        padding: "8px",
        fontSize: "12px",
      },
    },
  };

  return (
    <DataTableWrapper isSidebarOpen={isSidebarOpen}>
      <div style={styles.container}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Delivery</th>
              <th style={styles.th}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>{item.date}</td>
                <td style={styles.td}>{item.delivery}</td>
                <td style={styles.td}>
                  <button onClick={handleDelete} style={styles.button}>
                    <i className="fa fa-trash"></i>
                    <span style={styles.buttonText}>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DataTableWrapper>
  );
};

export default DataTable;
