import { ReactNode, useRef } from "react";
import { Loader } from "../Loader/Loader";
import { useIntersectionObserverAndFetch } from "../../hooks/UseIntersectionObserver";
import "./InfiniteScroll.css";

interface InfiniteScrollProps {
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  error: Error | null;
  children: ReactNode;
}

export function InfiniteScroll({
  error,
  isLoading,
  isFetchingNextPage,
  fetchNextPage,
  children,
}: InfiniteScrollProps) {
  const triggerRef = useRef<HTMLDivElement>(null);

  useIntersectionObserverAndFetch({
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    triggerRef,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="page-container">
      {children}
      <div ref={triggerRef}>
        <Loader />
      </div>
    </div>
  );
}
