import { fetcher } from "@/lib/fetcher";
import { Object } from "@/lib/types";
import useSWR from "swr";

const useGetObject = <T>(type:Object) => {
  const beUrl = process.env.BACKEND_URL || "http://localhost:8000/api";
  const { data, mutate } = useSWR<T[]>(`${beUrl}/${type}`, fetcher);

  return {
    data, mutate
  }
}

export {useGetObject}