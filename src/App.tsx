import { FC } from "react";
import { useAdaptivity, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Home from "./Panels/Home";

const App: FC = () => {
  const { viewWidth } = useAdaptivity();

  return (
    <AppRoot>
      <Home viewWidth={viewWidth} />
    </AppRoot>
  );
};

export default App;
