import { FC } from "react";
import { ICategory } from "../../types/category";
import ProductList from "../Product/ProductList";
import "./CategoryItem.scss";

interface CategoryItemProps {
  category: ICategory;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const products = category.products;
  return(
    <div className="category">
        <div className="category__title">{category.title}</div>
        <div className="category__body">
            <ProductList products={products}/>
        </div>
        <div className="category__final-amount">{category.final_amount} ₽</div>
    </div>
  );
};

export default CategoryItem;
