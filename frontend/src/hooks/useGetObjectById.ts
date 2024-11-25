import { fetcher } from "@/lib/fetcher";
import { Object } from "@/lib/types";
import useSWR from "swr";

export const useGetObjectById = <T>(type: Object, id?: string) => {
  const beUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, isLoading, mutate } = useSWR<T>(
    id ? `${beUrl}/${type}/${id}` : null,
    fetcher
  );

  return { data, isLoading, mutate };
};
