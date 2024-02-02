import { useEffect, useState } from "react";
import SearchBar from "./useDebource";
const useInterval = (fn, timeout) => {
  cosnt[(state, setState)] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      fn();
    }, timeout);
  }, []);

  return <h1>{state}</h1>;
};
