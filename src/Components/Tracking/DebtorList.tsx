import "./DebtorList.scss";


const DebtorList = () => {
    const debt = 1000;
    const paid = 100;
    const debtorName_1 = "Макс";
    return(
        <div className="debtorList-item">
            <span className="debtorList-item__debtor-name">{ debtorName_1 }</span> 
            <span className="debtorList-item__money"> { paid } / { debt } </span>
        </div>
    );
};

export default DebtorList;