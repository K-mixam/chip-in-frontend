import "./PaymentsList.scss";

const PaymentsList = () => {
    const debt = 900;
    const paid = 450;
    const debtProduct = "Шашлык";
    return(
        <div className="paymentsList-item">
            <span className="paymentsList-item__debt-product">{ debtProduct }</span> 
            <span className="paymentsList-item__money"> { paid } / { debt } </span>
        </div>
    );
};

export default PaymentsList;