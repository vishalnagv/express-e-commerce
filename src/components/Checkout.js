import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";

const Checkout = () => {
  const config = localStorage.getItem("config") || window.ssp_config || {};
  const [loader, setLoader] = useState(false);
  const onLoad = () => {
    setLoader(false);
    const iframe = document.getElementById("tokenframe");
    if (iframe.contentWindow) {
      iframe.contentWindow.postMessage(config, "*");
    }
  };

  return (
    <div style={{ margin: "30px", textAlign: "left" }}>
      {loader && <CircularProgress />}
      <iframe
        id="tokenframe"
        name="tokenframe"
        src={config.iframe_src}
        onLoad={onLoad}
        width={config.frameWidth}
        height={config.frameHeight}
      />
    </div>
  );
};

export default Checkout;
