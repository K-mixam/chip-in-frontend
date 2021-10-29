import store from "../../store";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categories = store.product.categories;

  return (
    <div className="categories">
      {categories.map((category) => {
        return category.products.length ? (
          <CategoryItem category={category} key={category.id} />
        ) : null;
      })}
    </div>
  );
};

export default CategoryList;
