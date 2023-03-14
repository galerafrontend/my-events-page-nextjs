import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoading]);

  return isLoading;
};
