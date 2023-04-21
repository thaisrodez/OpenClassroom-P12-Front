/**
 * Get session Api data formatted
 * @param { number } id
 * @return { Object.<activity: Object[], isLoading: Boolean> }
 */
import { useEffect, useState } from 'react';
import { useApi } from './api';
import { Session } from '../models/Session';

export const useSession = (id) => {
  const [sessions, setSessions] = useState();

  const { data, error, isLoading } = useApi({
    method: 'GET',
    url: `/${id}/average-sessions`,
  });

  useEffect(() => {
    if (data) {
      const sessionModel = new Session(data.data.id, data.data.sessions);
      const formattedSessions = sessionModel.formatSessions();

      setSessions(formattedSessions);
    }
  }, [data]);

  return { sessions, isLoading };
};
