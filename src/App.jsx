import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Loading = lazy(() => import("./components/Loading"));
const AppLayout = lazy(() => import("./layouts/AppLayout"));
const Error = lazy(() => import("./components/Error"));
const HomePage = lazy(() => import("./pages/HomePage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const SearchResultPage = lazy(() => import("./pages/SearchResultPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <Suspense fallback={<Loading />}>
          <AppLayout />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/categorypage/:category", element: <CategoryPage /> },
        { path: "/searchresultpage/:query", element: <SearchResultPage /> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
