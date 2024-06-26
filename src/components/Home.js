import React, { useState } from "react";
import { Button, CircularProgress, Dialog, Grid } from "@mui/material";
import { cloneDeep } from "lodash";
import { LocalMall, LocalMallOutlined } from "@mui/icons-material";
import Checkout from "./Checkout";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openPage, setOpenPage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [config, setConfig] = useState(window.ssp_config || {});
  const [value, setValue] = useState(JSON.stringify(config.input_data) || "{}");
  const [invalidJson, setInvalidJson] = useState(false);

  const handleOpen = (modal) => {
    setOpenModal(modal);
    setOpenPage(!modal);
  };

  const handleChange = (v) => {
    let data = cloneDeep(config);
    try {
      JSON.parse(v);
      data.input_data = JSON.parse(v || "{}");
      setValue(v);
      setConfig(data);
      setInvalidJson(false);
      localStorage.setItem("config", data);
    } catch (error) {
      setValue(v);
      localStorage.setItem("config", {});
      setInvalidJson(true);
    }
  };

  const onLoad = () => {
    setLoader(false);
    const iframe = document.getElementById("tokenframe");
    if (iframe.contentWindow) {
      iframe.contentWindow.postMessage(config, "*");
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      {!openPage && (
        <div style={{ margin: "30px", textAlign: "left" }}>
          <div>
            <b>Enter your input here:</b>
          </div>
          <br />
          <Grid container xs={12}>
            <Grid item xs={4}>
              <textarea
                id="jsonInput"
                rows="10"
                cols="50"
                onChange={(e) => handleChange(e.target.value)}
                value={value}
              ></textarea>
              <br />
              {invalidJson && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  <i>Input format is not a valid JSON</i>
                </span>
              )}
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                onClick={() => handleOpen(true)}
                disabled={invalidJson}
                startIcon={<LocalMall />}
                style={{ backgroundColor: "rgb(29, 29, 29)" }}
              >
                Buy via Modal
              </Button>
              <br />
              <Button
                variant="outlined"
                onClick={() => handleOpen(false)}
                disabled={invalidJson}
                startIcon={<LocalMallOutlined />}
                style={{
                  marginTop: "20px",
                  borderColor: "rgb(29, 29, 29)",
                  color: "rgb(29, 29, 29)",
                }}
              >
                Buy via Embed
              </Button>
            </Grid>
          </Grid>
          <Dialog
            onClose={() => setOpenModal(false)}
            open={openModal}
            fullWidth
            maxWidth="md"
          >
            {loader && <CircularProgress />}
            <iframe
              id="tokenframe"
              name="tokenframe"
              src={config.iframe_src}
              onLoad={onLoad}
              width={config.frameWidth}
              height={config.frameHeight}
            />
          </Dialog>
        </div>
      )}
      {openPage && (
        <Checkout setOpenPage={(e) => setOpenPage(e)} config={config} />
      )}
    </div>
  );
};

export default Home;
