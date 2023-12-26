import { useState, useEffect } from "react";
import axios from "axios";

type UseFetchProps = (url: string) => { data: string[] };

// hook to fetch categories from API
const useFetchCategories: UseFetchProps = (url: string) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(url);
        setData(response.data as string[]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData().catch((err) => {
      console.log(err);
    });
  }, [url]);

  return { data };
};

export default useFetchCategories;
