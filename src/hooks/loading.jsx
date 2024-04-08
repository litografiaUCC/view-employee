import { useState, useEffect } from 'react';

function useLoading(initialLoadingState = true) {
  const [loading, setLoading] = useState(initialLoadingState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return [loading, setLoading];
}

export default useLoading;