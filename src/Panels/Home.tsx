import {
  SplitLayout,
  PanelHeader,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  Group,
  Header,
  SimpleCell,
} from "@vkontakte/vkui";
import { FC } from "react";
import "./Home.scss";

interface HomeProps {
  viewWidth: ViewWidth | undefined;
}

const Home: FC<HomeProps> = ({ viewWidth }) => {
  return (
    <SplitLayout header={<PanelHeader separator={false} />}>
      <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
        <View activePanel="main">
          <Panel id="main">
            <PanelHeader>VKUI</PanelHeader>
            <Group header={<Header mode="secondary">Items</Header>}>
              <SimpleCell>Hello</SimpleCell>
              <SimpleCell>World</SimpleCell>
              <p>This is test text</p>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export default Home;
