import { FC } from "react";
import { IProduct } from "../../types/product";
import ProgressBar from "../Tracking/ProgressBar";
import DebtorList from "../Tracking/DebtorList";
import "./DropDownItem.scss";
import PaymentsList from "../Tracking/PaymentsList";
import MyCheckbox from "../Generic/MyCheckbox";

import NumberOfDebtors from "../../assets/png/PeopleNumber.png";
import MoneyPerDebtor from "../../assets/png/MoneyPerPerson.png";
import ProductCount from "../../assets/png/ProductNumber.png";
import ProductPrice from "../../assets/png/FinalProductCost.png";
import { FinalProductCost, MoneyPerPerson, PeopleNumber, ProductNumber } from "../../assets/svg";




interface DropDownItemProps {
  product: IProduct;
  type: string;
}

interface CategoryTrackingItemProps{
  product: IProduct;
}

interface GuestsTrackingItemProps{
  
}

interface ProductSelectItemProps{
  product: IProduct;
}

const DropDownItem: FC<DropDownItemProps> = ({ product, type }) => {

  const getCurrentItem = () => {
    switch(type){
      case "category-tracking":
        return <CategoryTrackingItem product={product}/>
      case "chipin-data":
        return <CategoryTrackingItem product={product}/>
      case "guests-tracking":
        return <GuestsTrackingItem/>
      case "product-select":
        return <ProductSelectItem product={product}/>
    }
  }
  return (
    <>{getCurrentItem()}</>
  );
};

const CategoryTrackingItem:FC<CategoryTrackingItemProps> = ({ product }) => {

  const debt_tmp = 1000;
  const paid_tmp = 100;

  return(
    <div className="tracking__item">
      <li className="tracking__head">
        {product.title}
        <div className="tracking__description">
          <div className="tracking__description__element">
            {product.count} шт <span className="operation">×</span> {product.price}{" "}
            ₽ <span className="operation">=</span> {product.count * product.price} ₽
          </div>
          <div className="tracking__description__element">            
            <DebtorList/>
          </div>
          <div className="tracking__description__element">
            <ProgressBar  paid={paid_tmp} debt={debt_tmp}/>
          </div>
        </div>
      </li>
    </div>
  );
};

const GuestsTrackingItem:FC<GuestsTrackingItemProps> = () => {
  const guestName = "Владимир";
  const paid = 450;
  const debt = 900;
  return(
    <div className="tracking__item">
        <li className="tracking__head">
          {guestName}
          <div className="tracking__description">
            <div className="tracking__description__element">
              <PaymentsList/>
            </div>
            <div className="tracking__description__element">
              <ProgressBar paid={paid} debt={debt}/>
            </div>
          </div>
        </li>
      </div>
  );
};

const ProductSelectItem:FC<ProductSelectItemProps> = ( {product} ) => {

  const numberOfDebtors = 2;
  const moneyPerDebtor = 500

  return(
    <div className="tracking__item">
      <div className="tracking__head">
        <label className="tracking__name">
          {product.title}
          <div className="tracking__name__checkbox"><MyCheckbox/></div>
        </label>
        <div className="tracking__description">
          <div className="tracking__description__product-select">
            <div className="tracking__description__product-select__left">
              {/* <NumberOfDebtors/>
              <PeopleNumber/> */}
              {numberOfDebtors} чел.
            </div>
            <div className="tracking__description__product-select__right">
              {/* <MoneyPerDebtor/>
              <MoneyPerPerson/> */}
              {moneyPerDebtor} ₽ / чел.
            </div>
          </div>
          <div className="tracking__description__product-select">
            <div className="tracking__description__product-select__left">
                {/* <ProductCount/>
                <ProductNumber/> */}
                {product.count} шт.
            </div>
            <div className="tracking__description__product-select__right">
                {/* <ProductPrice/>
                <FinalProductCost/> */}
                {product.price} ₽
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownItem;
