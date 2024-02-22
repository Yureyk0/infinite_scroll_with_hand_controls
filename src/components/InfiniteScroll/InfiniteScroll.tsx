import { ReactNode, useRef } from "react";
import { Loader } from "../Loader/Loader";
import { useIntersectionObserverAndFetch } from "../../hooks/UseIntersectionObserver";
import "./InfiniteScroll.css";

interface InfiniteScrollProps {
  fetchNextPage: () => void;
  isLoading: boolean;
  children: ReactNode;
}

export function InfiniteScroll({
  isLoading,
  fetchNextPage,
  children,
}: InfiniteScrollProps) {
  const triggerRef = useRef<HTMLDivElement>(null);

  useIntersectionObserverAndFetch({
    fetchNextPage,
    isLoading,
    triggerRef,
  });

  return (
    <div className="page-container">
      {children}
      <div ref={triggerRef}>
        <Loader />
      </div>
    </div>
  );
}
