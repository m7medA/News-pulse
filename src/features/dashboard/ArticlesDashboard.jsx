import { useQuery } from "@tanstack/react-query";
import ArticlesList from "./ArticlesList";
import { getArticles } from "../../services/dashboardServices";
import { useAuth } from "../../context/AuthContext";

function ArticlesDashboard() {
  const { token } = useAuth();

  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles", token],
    queryFn: () => getArticles(token),
  });

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="py-2 ">
      <ArticlesList articles={articles} />
    </div>
  );
}

export default ArticlesDashboard;
