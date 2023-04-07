/**
 * App main page
 *
 * @component
 */
import React from 'react';
import Header from './components/layout/Header';
import styled from 'styled-components';
import Menu from './components/layout/Menu';
import DashBoard from './components/layout/Dashboard';

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
