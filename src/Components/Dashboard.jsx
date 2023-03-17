import styled from 'styled-components';
import GraphSection from './GraphSection';
import StatsSection from './StatsSection';
import Subheader from './Subheader';

const Main = styled.main`
  margin: 90px 0 0 120px;
`;

const InfosDiv = styled.div`
  display: flex;
`;

function DashBoard() {
  return (
    <Main>
      <Subheader />
      <InfosDiv>
        <GraphSection />
        <StatsSection />
      </InfosDiv>
    </Main>
  );
}

export default DashBoard;
