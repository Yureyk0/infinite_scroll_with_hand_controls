import { MutableRefObject, useCallback } from "react";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import { Photo } from "../types/photo";

export function useOnScreen({
  isLoading,
  fetchNextPage,
  intObserver,
}: {
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<Photo[], Error>>;
  intObserver: MutableRefObject<IntersectionObserver | null>;
}) {
  const secondLastLIRef = useCallback(
    (item: HTMLLIElement | null) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });

      if (item) intObserver.current.observe(item);
    },
    [isLoading, intObserver, fetchNextPage],
  );
  return secondLastLIRef;
}
