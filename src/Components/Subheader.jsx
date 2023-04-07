import styled from 'styled-components';
import { useApi } from '../service/api.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  const params = useParams();
  const [user, setUser] = useState();

  const { data, error, isLoading } = useApi({
    method: 'GET',
    url: `/${params.id}`,
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
        <UserName>
          {!isLoading && user ? user.userInfos.firstName : ''}
        </UserName>
      </Title>
      <Subtitle>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </Subtitle>
    </SubheaderContainer>
  );
}

export default Subheader;
