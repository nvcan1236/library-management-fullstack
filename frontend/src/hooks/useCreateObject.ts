import { Object } from "@/lib/types";

const useCreateObject = (type: Object, newData:object) => {
  const beUrl = process.env.BACKEND_URL || "http://localhost:8000/api";

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