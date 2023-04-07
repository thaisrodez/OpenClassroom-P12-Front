import caloriesIcon from '../assets/calories-icon.png';
import carbsIcon from '../assets/carbs-icon.png';
import fatIcon from '../assets/fat-icon.png';
import proteinIcon from '../assets/protein-icon.png';
import styled from 'styled-components';
import Stat from './Stat';
import { useApi } from '../service/api.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StatsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

function StatsSection() {
  const params = useParams();
  const [keyData, setkeyData] = useState();

  const { data, error, isLoading } = useApi({
    method: 'GET',
    url: `/${params.id}`,
  });

  useEffect(() => {
    if (data) {
      setkeyData(data.data.keyData);
    }
  }, [data]);
  return (
    <StatsContainer>
      {!isLoading && keyData && (
        <>
          <Stat
            icon={caloriesIcon}
            count={keyData.calorieCount}
            type="calories"
          />
          <Stat
            icon={proteinIcon}
            count={keyData.proteinCount}
            type="protein"
          />
          <Stat
            icon={carbsIcon}
            count={keyData.carbohydrateCount}
            type="carbohydrate"
          />
          <Stat icon={fatIcon} count={keyData.lipidCount} type="lipid" />
        </>
      )}
    </StatsContainer>
  );
}

export default StatsSection;
