import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCategoryArticles } from "../services/newsServices";
import ArticlesContianer from "../components/articles/ArticlesContianer";

function CategoryPage() {
  const { category } = useParams();

  const {
    data: categoryArticles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category", category],
    queryFn: () => getCategoryArticles(category),
  });

  return (
    <section className="py-8 px-4">
      <ArticlesContianer
        keyWord={category}
        articles={categoryArticles}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
}

export default CategoryPage;
