/* eslint-disable react/prop-types */
import { userActivity } from '../mockedDatas/mockedData';
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

const BarChartBackground = styled.div`
  background-color: #fbfbfb;
  padding: 20px 30px 20px 40px;
`;

const TooltipContainer = styled.div`
  background-color: #e60000;
  color: white;
  padding: 4px 12px;
  text-align: center;
  &:focus-visible {
    outline: 0px;
  }
`;

const LegendText = styled.span`
  color: #74798c;
  margin-left: 8px;
`;

function DailyActivities() {
  const CustomTooltip = ({ active, payload }) => {
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

  const renderColorfulLegendText = (value, entry) => {
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
      <BarChart width={750} height={180} data={userActivity.sessions}>
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
        <Tooltip content={<CustomTooltip />} />
        <Legend
          iconType="circle"
          iconSize={10}
          verticalAlign="top"
          align="right"
          formatter={renderColorfulLegendText}
          wrapperStyle={{ top: '-40px' }}
        />
        <Bar dataKey="kilogram" yAxisId="right" fill="#282D30" barSize={7} />
        <Bar dataKey="calories" yAxisId="left" fill="#E60000" barSize={7} />
      </BarChart>
    </BarChartBackground>
  );
}

export default DailyActivities;