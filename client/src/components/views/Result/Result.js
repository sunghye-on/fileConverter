import React, { useEffect } from "react";
// import { doneRequire } from "../../../_actions/user_actions";
import { useDispatch, useSelector } from "react-redux";

function Result(props) {
  // window.location.reload();
  // const dispatch = useDispatch();
  // const isRequre = useSelector((state) => state.user.isRequre);
  // console.log(isRequre);
  useEffect(() => {
    // dispatch(doneRequire());
  }, []);
  return <div>정현정이 만들 곳</div>;
}

export default Result;
