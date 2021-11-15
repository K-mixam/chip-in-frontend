import store from "../../store";
import FinalCategoryItem from "./FinalCategoryItem";
import { FC } from "react";
import Container from "../Generic/Container";

interface FinalCategoryListProps{
  type: string;
}

const FinalCategoryList:FC<FinalCategoryListProps> = ({ type }) => {
  const categories = store.product.categories;

  return (
    <Container>
      {categories.map((category) => {
        return category.products.length ? (
          <FinalCategoryItem category={category} key={category.id} type={type}/>
        ) : null;
      })}
    </Container>
  );
};


export default FinalCategoryList;