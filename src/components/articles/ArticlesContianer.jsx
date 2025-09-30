import List from "../List";
import Loading from "../Loading";

function ArticlesContianer({
  type = "category",
  keyWord,
  articles,
  isLoading,
  error,
}) {
  if (isLoading) return <Loading />;

  return (
    <section className="flex flex-col gap-8">
      <div className="text-lg sm:text-xl md:text-3xl font-semibold border-b-2 py-2">
        {type === "category" ? (
          <h2>
            Discover <span className="third-color">{articles.length}</span>{" "}
            articles from{" "}
            <span className="capitalize third-color">"{keyWord}"</span>
          </h2>
        ) : (
          <h2>
            🔎 Here are <span className="third-color">{articles.length}</span>{" "}
            results for{" "}
            <span className="capitalize third-color">"{keyWord}"</span>
          </h2>
        )}
      </div>

      <List articles={articles} />
    </section>
  );
}

export default ArticlesContianer;
