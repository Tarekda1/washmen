import useSWR from "swr";

export function usePartners() {
  const { data, error } = useSWR(
    "http://localhost:3000/api/v1/partners/all"
  );

  return {
    partners: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}
