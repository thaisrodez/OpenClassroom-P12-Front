/**
 * Component showing user performance graph.
 *
 * @component
 */
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useApi } from '../../service/api';
import { usePerformances } from '../../service/usePerformance';

const UserPerformanceContainer = styled.div`
  background-color: #282d30;
  border-radius: 5px;
`;

function UserPerformance() {
  const params = useParams();
  const [userPerformances, setUserPerformances] = useState();

  const { performances, isLoading } = usePerformances(params.id);

  useEffect(() => {
    if (performances) {
      setUserPerformances(performances);
    }
  }, [performances]);

  function customTick({ payload, x, y, stroke, textAnchor, radius }) {
    return (
      <g>
        <text
          radius={radius}
          stroke={stroke}
          x={x}
          y={y}
          textAnchor={textAnchor}
          style={{ fill: 'white', fontSize: '12px' }}
        >
          {payload.value}
        </text>
      </g>
    );
  }

  return (
    <UserPerformanceContainer>
      {!isLoading && userPerformances && (
        <RadarChart
          width={258}
          height={263}
          data={userPerformances}
          margin={{ top: 10, right: 24, bottom: 10, left: 24 }}
          startAngle={30}
          endAngle={390}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" tick={customTick} />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      )}
    </UserPerformanceContainer>
  );
}

export default UserPerformance;
