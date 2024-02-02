import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return debounceValue;
}

function App() {
  const [inputValue, setInputValue] = useState(0);
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <>
      Debounced Value id {debouncedValue}
      <input />
    </>
  );
}

export default App;
