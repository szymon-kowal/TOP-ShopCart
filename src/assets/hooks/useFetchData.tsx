import { useState, useEffect } from "react";
import axios from "axios";
import type { Item, StartPage } from "../components/interfaces";

type UseFetchProps = (url: string) => { data: Item[]; pageState: string };

// Params url:string => data fetched from API,
// state depended on if fetch was sucessful

const useFetchData: UseFetchProps = (url: string) => {
  const [data, setData] = useState<Item[]>([]);
  const [pageState, setPageState] = useState<StartPage>("loading");

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(url);
        setData(response.data as Item[]);
        setPageState("done");
      } catch (err) {
        setPageState("error");
        console.log(err);
      }
    };

    fetchData().catch((err) => {
      console.log(err);
    });
  }, [url]);

  return { data, pageState };
};

export default useFetchData;
