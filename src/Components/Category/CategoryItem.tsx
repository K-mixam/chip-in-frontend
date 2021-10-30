import { FC } from "react";
import store from "../../store";
import { ICategory } from "../../types/category";
import ProductList from "../Product/ProductList";
import "./CategoryItem.scss";

interface CategoryItemProps {
  category: ICategory;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const foundAmount = store.product.categoryAmounts.categoryAmounts.find(
    (categoryAmount) => categoryAmount.id === category.id
  );

  return (
    <div className="category">
      <div className="category__title">{category.title}</div>
      <div className="category__body">
        <ProductList products={category.products} />
      </div>
      <div className="category__final-amount">
        {foundAmount?.categoryAmount || 0} ₽
      </div>
    </div>
  );
};

export default CategoryItem;
