import { user } from '../mockedDatas/mockedData.js';
import styled from 'styled-components';

const SubheaderContainer = styled.section`
  padding: 68px 108px;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 48px;
`;

const UserName = styled.span`
  color: #ff0101;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin: 0;
`;

function Subheader() {
  return (
    <SubheaderContainer>
      <Title>
        Bonjour <UserName>{user.userInfos.firstName}</UserName>
      </Title>
      <Subtitle>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </Subtitle>
    </SubheaderContainer>
  );
}

export default Subheader;
