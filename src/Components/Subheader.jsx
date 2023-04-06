import styled from 'styled-components';
import { useEffect } from 'react';
import { useApi } from '../service/api.js';
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

  const { data, isLoading } = useApi({
    method: 'GET',
    url: '/12',
  });

  useEffect(() => {
    if (data) {
      setUser(data.data);
    }
  }, [data]);

  return (
    <SubheaderContainer>
      <Title>
        Bonjour{' '}
        <UserName>{!isLoading ? user.userInfos.firstName : ''}</UserName>
      </Title>
      <Subtitle>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </Subtitle>
    </SubheaderContainer>
  );
}

export default Subheader;
