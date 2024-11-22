export const fetcher = async <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Fetch error: ${response.statusText}`);
  }
  return response.json();
};

export const deleteFetcher = async (url: string): Promise<void> => {
  const response = await fetch(url, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Delete error: ${response.statusText}`);
  }
};


