/**
 * Component showing user sessions duration graph.
 *
 * @component
 */
import { LineChart, XAxis, YAxis, Tooltip, Line, Rectangle } from 'recharts';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSession } from '../../service/useSession';

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

function CustomizedCursor({ points, width }) {
  const { x, y } = points[0];
  return (
    <g>
      <Rectangle
        fill="rgba(0, 0, 0, 0.1)"
        x={x}
        y={y}
        width={width}
        height={270}
      />
    </g>
  );
}

function SessionDuration() {
  const params = useParams();
  const [userSessions, setUserSessions] = useState([]);

  const { sessions, isLoading } = useSession(params.id);

  useEffect(() => {
    if (sessions) {
      setUserSessions(sessions);
    }
  }, [sessions]);

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipContainer>
          <span>{`${payload[0].value} min`}</span>
        </TooltipContainer>
      );
    }
    return null;
  };

  const customAxisTick = ({ x, y, payload }) => {
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
      {!isLoading && userSessions && (
        <LineChart
          width={258}
          height={263}
          data={userSessions}
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
            tick={customAxisTick}
          />
          <YAxis
            hide={true}
            dataKey="sessionLength"
            domain={['dataMin - 10', 'dataMax + 20']}
            allowDataOverflow={false}
          />
          <Tooltip
            content={customTooltip}
            wrapperStyle={{ outline: 'none' }}
            cursor={<CustomizedCursor />}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{ stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 10 }}
            axisLine={false}
            stroke="url(#linear)"
            strokeWidth={2}
          />
        </LineChart>
      )}
    </SessionDurationContainer>
  );
}

CustomizedCursor.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number,
};
export default SessionDuration;
