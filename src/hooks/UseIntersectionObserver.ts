import { useEffect, MutableRefObject } from "react";

interface UseIntersectionObserverProps {
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  triggerRef: MutableRefObject<HTMLElement | null>;
}

export const useIntersectionObserverAndFetch = ({
  fetchNextPage,
  isFetchingNextPage,
  isLoading,
  triggerRef,
}: UseIntersectionObserverProps): void => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        if (isLoading) return;
        if (entries.isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef) {
        observer.disconnect();
      }
    };
  }, [fetchNextPage, isFetchingNextPage, isLoading, triggerRef]);
};
