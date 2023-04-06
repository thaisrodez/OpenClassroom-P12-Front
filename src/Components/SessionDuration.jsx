/* eslint-disable react/prop-types */
import { userAverageSession } from '../mockedDatas/mockedData';
import { LineChart, XAxis, Tooltip, Line, Rectangle } from 'recharts';
import styled from 'styled-components';

const SessionDurationContainer = styled.div`
  background-color: #ff0000;
  border-radius: 5px;
  position: relative;
`;

const SessionDurationTitle = styled.div`
  color: #ffffff;
  opacity: 0.5;
  width: 60%;
  position: absolute;
  top: 16px;
  left: 28px;
`;

const TooltipContainer = styled.div`
  background-color: #ffffff;
  padding: 12px 8px;
  text-align: center;
`;

const getDay = (number) => {
  const days = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
  };
  return days[number];
};

const getData = (sessions) => {
  return sessions.map((session) => ({ ...session, day: getDay(session.day) }));
};

function SessionDuration() {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipContainer>
          <span>{`${payload[0].value} min`}</span>
        </TooltipContainer>
      );
    }

    return null;
  };

  const CustomizedCursor = ({ points, width }) => {
    const { x, y } = points[0];
    return (
      <Rectangle
        fill="rgba(0, 0, 0, 0.1)"
        x={x}
        y={y}
        width={width}
        height={263}
      />
    );
  };

  const CustomizeAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={10}
          textAnchor="middle"
          fill="rgba(250, 250, 250, 0.5)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <SessionDurationContainer>
      <SessionDurationTitle>Durée moyenne des sessions</SessionDurationTitle>
      <LineChart
        width={258}
        height={263}
        data={getData(userAverageSession.sessions)}
        margin={{ top: -5, right: 0, left: 0, bottom: -5 }}
      >
        <defs>
          <linearGradient id="linear" x1="0" x2="1">
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          padding={{ left: 10, right: 10 }}
          height={40}
          tickLine={false}
          axisLine={false}
          tick={<CustomizeAxisTick />}
        />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: 'none' }}
          cursor={<CustomizedCursor />}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 10 }}
          axisLine={false}
          stroke="url(#linear)"
          strokeWidth={2}
        />
      </LineChart>
    </SessionDurationContainer>
  );
}

export default SessionDuration;