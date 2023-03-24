import { userPerformance } from '../mockedDatas/mockedData';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import styled from 'styled-components';

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

const data = (userPerformance) => {
  return userPerformance.data.map((item) => ({
    subject: translateKind(userPerformance.kind[item.kind]),
    value: item.value,
    fullMark: 210,
  }));
};

const UserPerformanceContainer = styled.div`
  background-color: #282d30;
  border-radius: 5px;
`;

function UserPerformance() {
  function customTick({ payload, x, y, stroke, textAnchor, radius }) {
    return (
      <g className="recharts-layer recharts-polar-angle-axis-tick">
        <text
          radius={radius}
          stroke={stroke}
          x={x}
          y={y}
          className="recharts-text recharts-polar-angle-axis-tick-value"
          textAnchor={textAnchor}
        >
          <tspan x={x} dy="0em" style={{ fill: 'white', fontSize: '12px' }}>
            {payload.value}
          </tspan>
        </text>
      </g>
    );
  }

  return (
    <UserPerformanceContainer>
      <RadarChart
        width={258}
        height={243}
        data={data(userPerformance)}
        margin={{ top: 10, right: 24, bottom: 10, left: 24 }}
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
    </UserPerformanceContainer>
  );
}

export default UserPerformance;
