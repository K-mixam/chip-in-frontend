import { FC } from "react";
import { IProduct } from "../../types/product";
import ProgressBar from "../Tracking/ProgressBar";
import DebtorList from "../Tracking/DebtorList";
import "./DropDownItem.scss";
import PaymentsList from "../Tracking/PaymentsList";

interface DropDownItemProps {
  product: IProduct;
  type: string;
}

interface CategoryTrackingItemProps{
  product: IProduct;
}

interface GuestsTrackingItemProps{
  
}

const DropDownItem: FC<DropDownItemProps> = ({ product, type }) => {

  const getCurrentItem = () => {
    switch(type){
      case "category-tracking":
        return <CategoryTrackingItem product={product}/>
      case "guests-tracking":
        return <GuestsTrackingItem/>
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
      <li className="tracking__name">
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
        <li className="tracking__name">
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

export default DropDownItem;
