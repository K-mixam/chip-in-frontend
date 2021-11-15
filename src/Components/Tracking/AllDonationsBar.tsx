import Container from "../Generic/Container";
import "./AllDonationsBar.scss";



const AllDonationsBar = () => {
    const allPayments = 3128
    const amountCollected = 5612

    return(
        <Container>
            <div className="all-donations-bar">
                <span className="all-donations-bar__title">Собрано средств</span>
                <div className="all-donations-bar__body">
                    <div className="all-donations-bar__debt">
                        <span className="all-donations-bar__debt__paid"></span>
                        <span className="all-donations-bar__debt__text">{allPayments} из {amountCollected} </span>
                    </div>
                </div>
            </div>
        </Container>
        
    );
};

export default AllDonationsBar;