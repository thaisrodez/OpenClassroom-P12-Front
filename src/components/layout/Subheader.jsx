/**
 * Component showing user main information.
 *
 * @component
 */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../service/useUser.js';

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

  const { userInfos, isLoading } = useUser(params.id);

  useEffect(() => {
    if (userInfos) {
      setUser(userInfos);
    }
  }, [userInfos]);

  return (
    <SubheaderContainer>
      <Title>
        Bonjour <UserName>{!isLoading && user ? user.firstName : ''}</UserName>
      </Title>
      <Subtitle>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </Subtitle>
    </SubheaderContainer>
  );
}

export default Subheader;
