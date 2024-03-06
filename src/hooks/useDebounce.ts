// для ограничения количества запросов на внешний ресурс

import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState<string>('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounced(value);
    }, delay);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debounced;
};

export default useDebounce;
