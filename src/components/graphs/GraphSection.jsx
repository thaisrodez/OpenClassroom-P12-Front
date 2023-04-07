/**
 * Component for main layout of graphs.
 *
 * @component
 */

import DailyActivities from './DailyActivities';
import styled from 'styled-components';
import SessionDuration from './SessionDuration';
import UserPerformance from './UserPerformance';
import UserScore from './UserScore';

const ThreeColumns = styled.div`
  display: flex;
  gap: 32px;
`;

function GraphSection() {
  return (
    <div>
      <DailyActivities />
      <ThreeColumns>
        <SessionDuration />
        <UserPerformance />
        <UserScore />
      </ThreeColumns>
    </div>
  );
}

export default GraphSection;
