import { FC } from "react";
import { useAdaptivity, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Home from "./Panels/Home";
import store from "./store";
import { ICurrentPanel } from "./types/app";

const App: FC = () => {
  const { viewWidth } = useAdaptivity();
  const app = store.app.currentPanel;

  const currentPanel = () => {
    switch (app) {
      case ICurrentPanel.home:
        return <Home viewWidth={viewWidth} />;
      case ICurrentPanel.room:
        return <div>Room component</div>;
      case ICurrentPanel.settings:
        return <div>Settings component</div>;
    }
  };

  return <AppRoot>{currentPanel()}</AppRoot>;
};

export default App;
