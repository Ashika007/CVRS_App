import { useEffect } from 'react';

export function useFrameworkReady() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.frameworkReady?.();
    }
  }, []); // Add dependency array to prevent unnecessary re-runs
}
