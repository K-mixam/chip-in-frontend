import { FC } from "react";
import { IProduct } from "../../types/product";
import DropDownItem from "./DropDownItem";

interface DropDownListProps{
    products: IProduct[];
    type: string;
}

const DropDownList:FC<DropDownListProps> = ({products, type }) => {    
    return(
        <div className="products">
            {products.map((product) => {
                return <DropDownItem product={product} key={product.id} type={type}/>;
            })}
        </div>
    );
};

export default DropDownList;