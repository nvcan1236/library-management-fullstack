const formatDate = (date: string) => {
  return Intl.DateTimeFormat("vi", {
    dateStyle: "medium",
  }).format(new Date(date));
};

const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") return localStorage.getItem(key);
};

const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") return localStorage.setItem(key, value);
};

export { formatDate, getLocalStorage, setLocalStorage };
