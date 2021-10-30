import store from "../../store";
import "./TotalAmount.scss";

const TotalAmount = () => {
  return (
    <div className="total-amount">
      {store.product.categoryAmounts.resultAmount} ₽
    </div>
  );
};

export default TotalAmount;
