import { FC } from "react";
import "./SingleButton.scss";

interface SingleButtonProps {
  name: string;
  onClick?: () => void;
}

const SingleButton: FC<SingleButtonProps> = ({ name, onClick }) => {
  return (
    <button className="single-button" onClick={onClick}>
      {name}
    </button>
  );
};

export default SingleButton;
