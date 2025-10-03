import { useQuery } from "@tanstack/react-query";
import NewsBlock from "../components/NewsBlock";
import { getLatestNews } from "../services/newsServices";
import ArticlesContianer from "../components/articles/ArticlesContianer";
import Loading from "../components/Loading";
import Error from "../components/Error";

function HomePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: getLatestNews,
  });

  if (isLoading)
    return (
      <div className="relative h-80">
        <Loading />
      </div>
    );

  if (error)
    return (
      <div className="relative h-80">
        <Error error={error} />
      </div>
    );

  return (
    <section className="py-8 px-2 flex flex-col gap-12">
      <ArticlesContianer
        keyWord="latest news"
        data={data}
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
