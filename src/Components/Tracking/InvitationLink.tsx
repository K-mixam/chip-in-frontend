import { CopyLink } from "../../assets/svg";
import Container from "../Generic/Container";
import "./InvitationLink.scss";

const InvitationLink = () => {
    return(
        <Container>
            <div className="invitation-link">
                <span className="invitation-link__title">Пригласить гостей</span>
                <div className="invitation-link__body">
                    <div className="invitation-link__link-place">
                        <span className="invitation-link__link-place__link-text">текст ссылки</span>
                      <button className="copy-link-btn"><CopyLink/></button>  
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default InvitationLink;