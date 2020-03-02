import * as React from "react";
import { Avatar } from "antd";

// @ts-ignore
import img from "../../static/Gundam.png";

const Home: React.FC = () => {
  return (
    <>
      <p>Your Warm Home!</p>
      <Avatar size={64} src={img} />
    </>
  );
};

export default Home;
