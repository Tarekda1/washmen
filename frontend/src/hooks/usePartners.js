import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from "axios";

export function usePartners() {
  const queryClient = useQueryClient();
  const [dataFilter, setdataFilter] = useState(null);
  const baseUrl = "http://localhost:3000/api/v1/partners/all";
  const { isLoading, error, data, isFetching } = useQuery('partners', () => {
    let url;
    if (dataFilter != null) {
      const { range, long, lat } = dataFilter;
      url = `${baseUrl}?range=${range}&coordinates=[${long},${lat}]`;
    }
    else {
      url = baseUrl;
    }
    return axios.get(
      url
    ).then((res) => {
      return res.data;
    });
  }, {
    refetchOnWindowFocus: false
  });

  const mutation = useMutation(dataFilter => {
    let url;
    console.log('from mutation');
    if (dataFilter != null) {
      const { range, long, lat } = dataFilter;
      url = `${baseUrl}?range=${range}&coordinates=[${long},${lat}]`;
    }
    else {
      url = baseUrl;
    }
    console.log(url);
    return axios.get(
      url
    ).then((res) => {
      return res.data;
    });
  }, {
    onSuccess: data => {
      queryClient.setQueryData('partners', data);
    }
  })

  const searchPartners = (dataFilter) => {
    mutation.mutate(dataFilter);
  }

  return {
    partners: data?.data || [],
    isLoading: isLoading,
    isError: error,
    search: searchPartners
  };
}
