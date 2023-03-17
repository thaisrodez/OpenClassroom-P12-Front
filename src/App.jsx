import React from 'react';
import Header from './Components/Header';
import styled from 'styled-components';
import Menu from './Components/Menu';
import DashBoard from './Components/Dashboard';

const Body = styled.div`
  font-family: 'Roboto', sans-serif;
`;

function App() {
  return (
    <Body>
      {/* Main Layout */}
      <Header />
      <Menu />
      {/* Main Dashboard */}
      <DashBoard />
    </Body>
  );
}

export default App;
