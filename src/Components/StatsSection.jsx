import caloriesIcon from '../assets/calories-icon.png';
import carbsIcon from '../assets/carbs-icon.png';
import fatIcon from '../assets/fat-icon.png';
import proteinIcon from '../assets/protein-icon.png';
import { user } from '../mockedDatas/mockedData.js';
import styled from 'styled-components';
import Stat from './Stat';

const StatsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

function StatsSection() {
  return (
    <StatsContainer>
      <Stat
        icon={caloriesIcon}
        count={user.keyData.calorieCount}
        type="calories"
      />
      <Stat
        icon={proteinIcon}
        count={user.keyData.proteinCount}
        type="protein"
      />
      <Stat
        icon={carbsIcon}
        count={user.keyData.carbohydrateCount}
        type="carbohydrate"
      />
      <Stat icon={fatIcon} count={user.keyData.lipidCount} type="lipid" />
    </StatsContainer>
  );
}

export default StatsSection;
