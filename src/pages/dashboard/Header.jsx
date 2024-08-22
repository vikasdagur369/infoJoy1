import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: margin-left 0.3s ease;
  margin-left: ${(props) => (props.isSidebarOpen ? "250px" : "0")};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
`;

const Header = ({ isSidebarOpen }) => {
  return (
    <HeaderWrapper isSidebarOpen={isSidebarOpen}>
      <HeaderTitle>Dashboard</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
