import { useState } from "react";

const useOneOrNoneSwitch: (
  defaultSwitch: string | undefined
) => [string | undefined, (id: string) => void] = () => {
  const [choseSwitchId, setChoseSwitchId] = useState<undefined | string>(
    undefined
  );

  const chooseHandler = (id: string) => {
    setChoseSwitchId(choseSwitchId !== id ? id : undefined);
  };

  return [choseSwitchId, chooseHandler];
};

export default useOneOrNoneSwitch;
