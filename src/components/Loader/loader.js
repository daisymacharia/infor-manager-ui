import React from "react";
import Loader from "react-loader-spinner";

const LoaderComponent = ({ loading }) => {
  return (
    <div style={{ position: "absolute", right: 0, left: 0 }}>
      <Loader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
        visible={true}
      />
    </div>
  );
};

export default LoaderComponent;
