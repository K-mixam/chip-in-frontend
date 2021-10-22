import { FC } from "react";
import "./SingleButton.scss";

interface SingleButtonProps {
  name: string;
}

const SingleButton: FC<SingleButtonProps> = ({ name }) => {
  return <button className="single-button">{name}</button>;
};

export default SingleButton;
