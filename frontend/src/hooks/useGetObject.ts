import { fetcher } from "@/lib/fetcher";
import { Object } from "@/lib/types";
import useSWR from "swr";

const useGetObject = <T>(type:Object) => {
  const beUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, mutate } = useSWR<T[]>(`${beUrl}/${type}`, fetcher);

  return {
    data, mutate
  }
}

export {useGetObject}