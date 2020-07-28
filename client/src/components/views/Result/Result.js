import React, { useEffect } from "react";

function Result(props) {
  useEffect(() => {}, []);
  console.log(props.location.state);
  return (
    <div>
      <iframe
        src={`/covtFiles/${props.location.state}`}
        style={{ display: "none" }}
      ></iframe>
    </div>
  );
}

export default Result;
