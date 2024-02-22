import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll";
import { usePhotos } from "../../hooks/usePhotos";

export function Home() {
  const pageSize = 4;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePhotos({ pageSize });
  return (
    <InfiniteScroll
      isLoading={isLoading}
      isFetchingNextPage={isFetchingNextPage}
      error={error}
      fetchNextPage={fetchNextPage}
    >
      {data?.pages.map((page) =>
        page.map((photo) => (
          <div key={photo.id}>
            <img src={photo.urls.regular} height={100} />
          </div>
        )),
      )}
    </InfiniteScroll>
  );
}
