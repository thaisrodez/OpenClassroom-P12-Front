/**
 * Get user Api data formatted
 * @param { number } id
 * @return { Object.<userInfos: Object, score: Object[], keyData:Object[], isLoading: Boolean> }
 */
import { useEffect, useState } from 'react';
import { useApi } from './api';
import { User } from '../models/User';

export const useUser = (id) => {
  const [userInfos, setUserInfos] = useState();
  const [score, setScore] = useState([]);
  const [keyData, setKeyData] = useState([]);

  const { data, error, isLoading } = useApi({
    method: 'GET',
    url: `/${id}`,
  });

  useEffect(() => {
    if (data) {
      const userModel = new User(
        data.data.id,
        data.data.userInfos,
        data.data.score,
        data.data.keyData
      );
      const formattedUserInfos = userModel.userInfos;
      setUserInfos(formattedUserInfos);
      const formattedScore = userModel.formatScore();
      setScore(formattedScore);
      const formattedKeyData = userModel.formatKeyData();
      setKeyData(formattedKeyData);
    }
  }, [data]);

  return { userInfos, score, keyData, isLoading };
};
