import React from "react";
import "./stylesheets/footer.css";

const Footer = () => {
  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <section>
        <div id="containerFooter">
          <div id="webFooter">
            <h3> Packages </h3>
            <p> Europe </p>
            <p> Oceania </p>
            <p> Americas </p>
            <p> Asia </p>
            <p> Africa </p>
          </div>
          <div id="webFooter">
            <h3> helpful link </h3>
            <p> home </p>
            <p> about </p>
            <p> contact </p>
          </div>
          <div id="webFooter">
            <h3> partners </h3>
            <p> Goibibo </p>
            <p> Trip advisor </p>
            <p> Make my trip </p>
            <p> Yatra </p>
            <p> + many more </p>
          </div>
          <div id="webFooter">
            <h3> address </h3>
            <p> #116, </p>
            <p> madan marg, </p>
            <p> Shimla - 902722, </p>
            <p> india </p>
          </div>
        </div>
        <div id="credit">
          <a href="">
            {" "}
            © Blue Horizon{" "}
          </a>{" "}
          &nbsp;&nbsp;&nbsp; X &nbsp;&nbsp;&nbsp;{" "}
          <a href="https://www.ordwaylabs.com/" target="_blank">
            {" "}
            ORDWAY{" "}
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
