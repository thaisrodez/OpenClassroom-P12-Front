/**
 * Get performance Api data formatted
 * @param { number } id
 * @return { Object.<performances: Object[], isLoading: Boolean> }
 */
import { useEffect, useState } from 'react';
import { useApi } from './api';
import { Performance } from '../models/Performance';

export const usePerformances = (id) => {
  const [performances, setPerformances] = useState();

  const { data, error, isLoading } = useApi({
    method: 'GET',
    url: `/${id}/performance`,
  });

  useEffect(() => {
    if (data) {
      const performanceModel = new Performance(
        data.data.id,
        data.data.kind,
        data.data.data
      );
      const formattedPerformances = performanceModel.formatPerformance();

      setPerformances(formattedPerformances);
    }
  }, [data]);

  return { performances, isLoading };
};
