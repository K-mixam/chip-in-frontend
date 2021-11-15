import Container from "../Generic/Container";
import Content from "../Generic/Content";
import DoubleButton from "../Generic/DoubleButton";
import CategoryList from "../Category/CategoryList";
import TotalAmount from "./TotalAmount";

const RoomProducts = () => {
  return (
    <>
      <Content>
        <Container>
          <CategoryList/>
        </Container>
      </Content>
      <TotalAmount />
      <DoubleButton />
    </>
  );
};

export default RoomProducts;
