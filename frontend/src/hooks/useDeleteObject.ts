import { deleteFetcher } from "@/lib/fetcher";
import { Object } from "@/lib/types";

const useDeleteObject = (type: Object, id: string) => {
  const beUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000/api";

  const fetch = async () => {
    await(deleteFetcher(`${beUrl}/${type}/${id}`))
  };

  return {
    fetch,
  };
};

export { useDeleteObject };
