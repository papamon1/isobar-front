import React from "react";
import { useSelector } from "react-redux";

const WorkPage = () => {
  const error = useSelector((state) => state.users.error);
  console.log("woek");

  return <div>workﬂ</div>;
};

export default WorkPage;
