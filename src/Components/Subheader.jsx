import styled from 'styled-components';
import { useEffect } from 'react';
import api from '../service/api.js';
import { useState } from 'react';

const SubheaderContainer = styled.section`
  padding: 68px 108px;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 48px;
  margin-top: 0;
`;

const UserName = styled.span`
  color: #ff0101;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin: 0;
`;

function Subheader() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      const { data } = await api.get('/12');
      setUser(data.data);
    }
    getUser();
  }, []);

  return (
    <SubheaderContainer>
      <Title>
        Bonjour <UserName>{user ? user.userInfos.firstName : ''}</UserName>
      </Title>
      <Subtitle>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </Subtitle>
    </SubheaderContainer>
  );
}

export default Subheader;
