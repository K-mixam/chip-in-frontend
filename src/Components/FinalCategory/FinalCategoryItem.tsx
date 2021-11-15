import { FC } from "react";
import { ICategory } from "../../types/category";
import DropDownList from "../DropDown/DropDownList";
import "./FinalCategoryItem.scss";

interface FinalCategoryItemProps {
  category: ICategory;
  type: string;
}

const FinalCategoryItem: FC<FinalCategoryItemProps> = ({ category, type }) => {
    const lastCategoryItem = () => {
      switch(type){
        case "category-tracking":
          return null;
        case "guests-tracking":
          return (
            <button className="text-button">Добавить гостя вручную</button>
          );
      }
    }

    const firstCategoryItem = () => {
      switch(type){
        case "category-tracking":
          return (
            <div className="category__title">{category.title}</div>
          );
        case "guests-tracking":
          return(
            <div className="category__title">Гости</div>
          );
      }
    }

  return (
    <div className="category">
      {firstCategoryItem()}
      <div className="category__body">
      <DropDownList products={category.products} type={type}/>
      </div>
      {lastCategoryItem()}
    </div>
  );
};

export default FinalCategoryItem;