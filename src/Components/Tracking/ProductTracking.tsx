import { FC } from "react";
import Content from "../Generic/Content";
import SingleButton from "../Generic/SingleButton";
import FinalCategoryList from "../FinalCategory/FinalCategoryList";



const ProductTracking:FC = () => {
    return(
        <>
            <Content>
                <FinalCategoryList type="category-tracking"/>
            </Content>
            <SingleButton name="Редактировать"/>
        </>
    );
};

export default ProductTracking;