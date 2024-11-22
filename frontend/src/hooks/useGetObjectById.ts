import { fetcher } from "@/lib/fetcher";
import { Object } from "@/lib/types";
import useSWR from "swr";

export const useGetObjectById = <T>(type: Object, id?: string) => {
  const beUrl = process.env.BACKEND_URL || "http://localhost:8000/api";
  const { data, isLoading } = useSWR<T>(
    id ? `${beUrl}/${type}/${id}` : null,
    fetcher
  );

  return { data, isLoading };
};
