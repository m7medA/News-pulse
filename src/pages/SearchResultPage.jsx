import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getSearchResult } from "../services/newsServices";
import ArticlesContianer from "../components/articles/ArticlesContianer";

function SearchResultPage() {
  const { query } = useParams();

  const {
    data: searchResult,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["searchResult", query],
    queryFn: () => getSearchResult(query),
  });

  return (
    <section className="py-8 px-2">
      <ArticlesContianer
        type="searchResult"
        keyWord={query}
        articles={searchResult}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
}

export default SearchResultPage;
