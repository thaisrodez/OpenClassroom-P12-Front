import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #fbfbfb;
  padding: 32px;
  border-radius: 5px;
`;

const StatImage = styled.img`
  width: 60px;
  height: 60px;
`;

const StatCount = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const StatType = styled.p`
  font-size: 14px;
  color: #74798c;
  margin: 4px 0;
`;

function Stat({ icon, count, type }) {
  const getTitle = () => {
    switch (type) {
      case 'calories':
        return 'Calories';
      case 'protein':
        return 'Proteines';
      case 'carbohydrate':
        return 'Glucides';
      case 'lipid':
        return 'Lipides';
      default:
        return '';
    }
  };

  return (
    <StatArticle>
      <StatImage src={icon} alt={type} />
      <div>
        <StatCount>
          {count}
          {type === 'calories' ? 'kCal' : 'g'}
        </StatCount>
        <StatType>{getTitle()}</StatType>
      </div>
    </StatArticle>
  );
}

Stat.propTypes = {
  icon: PropTypes.string,
  count: PropTypes.number,
  type: PropTypes.string,
};

export default Stat;
