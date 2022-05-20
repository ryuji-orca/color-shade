import { useCallback } from 'react';

export const useTabs = () => {
  const classNames = useCallback((...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
  }, []);
  return { classNames };
};
