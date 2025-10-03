import { useQuery } from "@tanstack/react-query";
import ArticlesList from "./ArticlesList";
import { getArticles } from "../../services/dashboardServices";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/Button";

function ArticlesDashboard() {
  const { token } = useAuth();

  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles(token),
  });

  if (isLoading) return <p>Loading</p>;

  return (
    <div className="py-2 ">
      <ArticlesList articles={articles} />
    </div>
  );
}

export default ArticlesDashboard;
