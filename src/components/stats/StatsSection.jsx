/**
 * Component layout for stats card
 *
 * @component
 */
import styled from 'styled-components';
import Stat from './Stat';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../service/useUser';

const StatsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

function StatsSection() {
  const params = useParams();
  const [userKeyData, setUserKeyData] = useState();

  const { keyData, isLoading } = useUser(params.id);

  useEffect(() => {
    if (keyData) {
      setUserKeyData(keyData);
    }
  }, [keyData]);

  return (
    <StatsContainer>
      {!isLoading &&
        userKeyData &&
        userKeyData.map((data) => (
          <Stat
            key={data.title}
            icon={data.icon}
            count={data.count}
            unit={data.unit}
            title={data.title}
          />
        ))}
    </StatsContainer>
  );
}

export default StatsSection;
