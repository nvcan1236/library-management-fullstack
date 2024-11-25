import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

type Stat = {
  count: string;
  status: "borrowing" | "returned";
};

const useGetLoanStat = (memberId?: string) => {
  const beUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, mutate } = useSWR<Stat[]>(
    memberId ? `${beUrl}/loan/${memberId}` : null,
    fetcher
  );

  return {
    data,
    mutate,
  };
};

export { useGetLoanStat };
