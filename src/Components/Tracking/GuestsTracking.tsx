import { FC } from "react";
import Content from "../Generic/Content";
import SingleButton from "../Generic/SingleButton";
import FinalCategoryList from "../FinalCategory/FinalCategoryList";
import AllDonationsBar from "./AllDonationsBar";
import InvitationLink from "./InvitationLink";



const GuestsTracking:FC = () => {
    return(
        <>
            <Content>
                <InvitationLink/>
                <AllDonationsBar/>
                <FinalCategoryList type="guests-tracking" />
            </Content>
            <SingleButton name="Назад"/>
        </>
    );
};

export default GuestsTracking;