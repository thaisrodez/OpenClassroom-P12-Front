/**
 * Get sessions Api data formatted
 * @param { number } id
 * @return { Object.<activity: Object[], isLoading: Boolean> }
 */
import { useEffect, useState } from 'react';
import { useApi } from './api';
import { Activity } from '../models/Activity';

export const useActivity = (id) => {
  const [activity, setActivity] = useState([]);

  const { data, error, isLoading } = useApi({
    method: 'GET',
    url: `/${id}/activity`,
  });

  useEffect(() => {
    if (data) {
      const sessionModel = new Activity(data.data.id, data.data.sessions);
      const formattedActivities = sessionModel.formatActivities();

      setActivity(formattedActivities);
    }
  }, [data]);

  return { activity, isLoading };
};
