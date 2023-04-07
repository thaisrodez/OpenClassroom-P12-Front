/**
 * Component showing user daily activities graph.
 *
 * @component
 */
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import styled from 'styled-components';
import { useApi } from '../../service/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BarChartBackground = styled.div`
  background-color: #fbfbfb;
  padding: 20px 30px 20px 40px;
  margin-bottom: 32px;
  border-radius: 5px;
`;

const TooltipContainer = styled.div`
  background-color: #e60000;
  color: white;
  padding: 4px 12px;
  text-align: center;
`;

const LegendText = styled.span`
  color: #74798c;
  margin-left: 8px;
`;

function DailyActivities() {
  const params = useParams();
  const [sessions, setSessions] = useState([]);

  const { data, error, isLoading } = useApi({
    method: 'GET',
    url: `/${params.id}/activity`,
  });

  useEffect(() => {
    if (data) {
      setSessions(data.data.sessions);
    }
  }, [data]);

  const formatSessions = (sessions) => {
    return sessions.map((session) => ({
      ...session,
      day: session.day.substring(session.day.length - 1),
    }));
  };

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipContainer>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}Kcal`}</p>
        </TooltipContainer>
      );
    }
    return null;
  };

  const renderLegendText = (value, entry) => {
    const { dataKey } = entry;
    return (
      <LegendText>
        {dataKey === 'kilogram' ? 'Poids (kg)' : 'Calories brulées (kCal)'}
      </LegendText>
    );
  };

  return (
    <BarChartBackground>
      <h4>Activité quotidienne</h4>
      {!isLoading && sessions && (
        <BarChart width={750} height={220} data={formatSessions(sessions)}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis
            yAxisId="right"
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            domain={['dataMin -10', 'dataMax + 10']}
          />
          <YAxis
            hide={true}
            yAxisId="left"
            orientation="left"
            dataKey="calories"
            domain={[0, 'dataMax + 20']}
          />
          <Tooltip content={customTooltip} wrapperStyle={{ outline: 'none' }} />
          <Legend
            iconType="circle"
            iconSize={10}
            verticalAlign="top"
            align="right"
            formatter={renderLegendText}
            wrapperStyle={{ top: '-40px' }}
          />
          <Bar
            dataKey="kilogram"
            yAxisId="right"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      )}
    </BarChartBackground>
  );
}

export default DailyActivities;
