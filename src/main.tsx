import React from "react";
import ReactDOM from "react-dom/client";
import { InfiniteScroll } from "./components/InfiniteScroll/InfiniteScroll.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <InfiniteScroll />
    </QueryClientProvider>
  </React.StrictMode>,
);
