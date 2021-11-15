import { FC } from "react";
import { IProduct } from "../../types/product";
import ProductItem from "./ProductItem";

interface ProductListProps{
    products: IProduct[];
}

const ProductList:FC<ProductListProps> = ({products }) => {    
    return(
        <div className="products">
            {products.map((product) => {
                return <ProductItem product={product} key={product.id}/>;
            })}
        </div>
    );
};

export default ProductList;