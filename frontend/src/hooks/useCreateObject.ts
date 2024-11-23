import { Object } from "@/lib/types";

const useCreateObject = (type: Object, newData:object) => {
  const beUrl = process.env.NEXT_PUBLIC_BACKEND_URL ;

  const fetchPost = async () => {
    const res = await(fetch(`${beUrl}/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }))

    return res.json()
  };

  return {
    fetch: fetchPost,
  };
};

export { useCreateObject };