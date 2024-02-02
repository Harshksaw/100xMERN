import { useEffect, useState } from "react";

export default function useDebounce(inputValue, delay) {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);
  });

  return debouncedValue;
}
