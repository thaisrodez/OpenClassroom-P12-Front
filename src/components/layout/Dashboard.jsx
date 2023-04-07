/**
 * Component for main layout.
 *
 * @component
 */
import styled from 'styled-components';
import GraphSection from '../graphs/GraphSection';
import StatsSection from '../stats/StatsSection';
import Subheader from '../layout/Subheader';

const Main = styled.main`
  margin: 90px 0 0 120px;
`;

const InfosDiv = styled.div`
  margin: 0px 110px;
  display: flex;
  gap: 32px;
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
