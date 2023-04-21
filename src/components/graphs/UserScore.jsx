/**
 * Component showing user score.
 *
 * @component
 */
import { Pie, PieChart, Legend } from 'recharts';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useUser } from '../../service/useUser';

// data for background pie
const data2 = [
  {
    name: 'test',
    value: 100,
  },
];

const UserScoreContainer = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
  width: 258px;
  height: 263px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ScoreTitle = styled.p`
  color: #20253a;
  font-size: 16px;
  position: absolute;
  top: 16px;
  left: 28px;
  margin: 0;
`;

const LegendText = styled.p`
  color: #74798c;
  font-size: 16px;
  margin: 0;
  text-align: center;
`;

const LegendPercent = styled.span`
  color: #282d30;
  font-size: 26px;
  font-weight: 700;
  margin: 0;
`;

function UserScore() {
  const params = useParams();
  const [userScore, setUserScore] = useState([]);

  const { score, isLoading } = useUser(params.id);

  useEffect(() => {
    if (score) {
      setUserScore(score);
    }
  }, [score]);

  const renderLegendText = ({ payload }) => {
    const legend = payload.find(({ value }) => value === 'score');
    if (legend) {
      return (
        <LegendText>
          <LegendPercent>{legend.payload.value}%</LegendPercent>
          <br />
          de votre objectif
        </LegendText>
      );
    }
    return null;
  };
  return (
    <UserScoreContainer>
      <ScoreTitle>Score</ScoreTitle>
      {!isLoading && score && (
        <PieChart width={250} height={250}>
          <Pie
            data={data2}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#FFF"
          />
          <Pie
            data={userScore}
            dataKey="value"
            cx="50%"
            cy="50%"
            cornerRadius={40}
            innerRadius={88}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
          />
          <Legend
            iconSize={0}
            verticalAlign="center"
            align="center"
            content={renderLegendText}
            wrapperStyle={{ top: '100px', left: '10px' }}
          />
        </PieChart>
      )}
    </UserScoreContainer>
  );
}

export default UserScore;
