import { useQueryClient } from "@tanstack/react-query";

function EditeArticle() {
  const queryClient = useQueryClient();

  const article = queryClient.getQueryData(["article"]);
  console.log(article);
  return <div>Edit</div>;
}

export default EditeArticle;
