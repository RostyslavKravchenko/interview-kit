import { useCallback, useRef } from "react";

export const useDebounce = (func, delay) => {
  let inDebounce = useRef(null);

  return useCallback((...args) => {
    clearTimeout(inDebounce.current);

    inDebounce.current = setTimeout(() => func(...args), delay);
  }, [func, delay]);
}