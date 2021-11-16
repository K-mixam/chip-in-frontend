import { FC } from "react";
import FinalCategoryList from "../FinalCategory/FinalCategoryList";
import Content from "../Generic/Content";
import SingleButton from "../Generic/SingleButton";
import TotalAmount from "../Room/TotalAmount";


const ProductSelect:FC = () => {
    return(
        <>
            <Content>
                <FinalCategoryList type="product-select"/>
            </Content>
            <TotalAmount/>
            <SingleButton name="Редактировать"/>
        </>
    );
};

export default ProductSelect;