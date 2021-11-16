import { FC, useState } from "react";
import FinalCategoryList from "../FinalCategory/FinalCategoryList";
import Content from "../Generic/Content";
import { Textarea } from "../Generic/MyInput";
import SingleButton from "../Generic/SingleButton";
import AllDonationsBar from "./AllDonationsBar";
import InvitationLink from "./InvitationLink";

const ChipInData:FC = () => {
    const [textareaValue, setTextareaValue] = useState("");
    return(
        <>
            <Content>
                <InvitationLink/>
                {/* <Textarea
                    labelText="Счёт для сбора"
                    defaultValue=""
                    changeHandler={setTextareaValue}
                /> */}
                <AllDonationsBar title="Вы отправили"/>
                <FinalCategoryList type="chipin-data"/>
            </Content>
            <SingleButton name="Назад"/>
        </>
    );
};

export default ChipInData;