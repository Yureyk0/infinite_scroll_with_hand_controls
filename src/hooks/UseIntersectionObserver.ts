import { useEffect, MutableRefObject } from "react";

interface UseIntersectionObserverProps {
  fetchNextPage: () => void;
  isLoading: boolean;
  triggerRef: MutableRefObject<HTMLElement | null>;
}

export const useIntersectionObserverAndFetch = ({
  fetchNextPage,
  isLoading,
  triggerRef,
}: UseIntersectionObserverProps): void => {
  useEffect(() => {
    if (!triggerRef.current) return;

    const observer = new IntersectionObserver(
      ([entries]) => {
        if (isLoading) return;
        if (entries.isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(triggerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, isLoading, triggerRef]);
};
