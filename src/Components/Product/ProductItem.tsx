import "./ProductItem.scss";
import { FC } from "react";
import { IProduct } from "../../types/product";


interface ProductItemProps{
    product: IProduct;
}

const ProductItem:FC<ProductItemProps> = ({ product }) => {
    return(
        <div className="products__item">
            <div className="products__name">{product.title}</div>
            <div className="products__description">
                {product.count} шт <span className="operation">×</span> {product.price}{" "}
                ₽ <span className="operation">=</span> {product.count * product.price} ₽
            </div>
        </div>
    );
};

export default ProductItem;