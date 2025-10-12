import CategoryItem from "./CategoryItem";

function CategoriesList({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </ul>
  );
}

export default CategoriesList;
