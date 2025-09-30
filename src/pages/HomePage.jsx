import { useQuery } from "@tanstack/react-query";
import NewsBlock from "../components/NewsBlock";
import { getLatestNews } from "../services/newsServices";
import ArticlesContianer from "../components/articles/ArticlesContianer";

function HomePage() {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["news"],
    queryFn: getLatestNews,
  });

  return (
    <section className="py-8 px-2 flex flex-col gap-12">
      <ArticlesContianer
        keyWord="latest news"
        articles={articles}
        isLoading={isLoading}
        error={error}
      />
      {/* <NewsBlock
        category="latest news"
        articles={articles}
        isLoading={isLoading}
        error={error}
      /> */}
    </section>
  );
}

export default HomePage;
