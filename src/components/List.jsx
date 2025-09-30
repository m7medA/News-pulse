import ListItem from "./ListItem";

function List({ articles }) {
  return (
    <ul className="flex flex-wrap justify-evenly gap-4">
      {articles.map((article) => (
        <ListItem article={article} key={article} />
      ))}
    </ul>
  );
}

export default List;
