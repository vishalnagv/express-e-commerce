import { ArrowBack } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";

const Checkout = (props) => {
  const config = props.config || window.ssp_config || {};
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
      <Button
        variant="contained"
        startIcon={<ArrowBack />}
        onClick={() => props.setOpenPage(false)}
        style={{backgroundColor: 'rgb(29, 29, 29)'}}
      >
        Back
      </Button>
      <br/>
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
