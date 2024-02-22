import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll";
import { usePhotos } from "../../hooks/usePhotos";

export function Home() {
  const pageSize = 4;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePhotos({ pageSize });

  if (error) return <div>{error.message}</div>;

  return (
    <InfiniteScroll
      isLoading={isLoading || isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    >
      {data?.pages.map((page) =>
        page.map((photo) => (
          <div key={photo.id}>
            <img src={photo.urls.regular} alt={photo.id} width={150} />
          </div>
        )),
      )}
    </InfiniteScroll>
  );
}
