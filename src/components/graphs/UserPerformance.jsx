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

const translateKind = (kind) => {
  switch (kind) {
    case 'cardio':
      return 'Cardio';
    case 'energy':
      return 'Energie';
    case 'endurance':
      return 'Endurance';
    case 'strength':
      return 'Force';
    case 'speed':
      return 'Vitesse';
    case 'intensity':
      return 'Intensité';
    default:
      return '';
  }
};

const UserPerformanceContainer = styled.div`
  background-color: #282d30;
  border-radius: 5px;
`;

function UserPerformance() {
  const params = useParams();
  const [performances, setPerformances] = useState();

  const { data, error, isLoading } = useApi({
    method: 'GET',
    url: `/${params.id}/performance`,
  });

  useEffect(() => {
    if (data) {
      setPerformances(data.data);
    }
  }, [data]);

  const formatData = (userPerformance) => {
    return userPerformance.data.map((item) => ({
      subject: translateKind(userPerformance.kind[item.kind]),
      value: item.value,
      fullMark: 210,
    }));
  };

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
      {!isLoading && performances && (
        <RadarChart
          width={258}
          height={263}
          data={formatData(performances)}
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
