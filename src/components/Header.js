import React from "react";
import "./stylesheets/header.css";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <>
      <header style={{ top: 0, position: "fixed" }}>
        <section>
          <div id="container">
            <div id="shopName">
              <Box display="flex">
                <img
                  style={{ height: "45px", width: "45px", marginRight: '10px' }}
                  src={`${process.env.PUBLIC_URL}/kisspng-world-computer-icons-travel-globe-transport-tourist-5ac7b1c5275aa4.6078174315230366131612.png`}
                />
                <a href="">
                  {" "}
                  <b>BLUE</b>HORIZON{" "}
                </a>
              </Box>
            </div>
            <div id="collection">
              <div id="clothing">
                <a href=""> EXPLORE </a>
              </div>
              <div id="accessories">
                <a href=""> DOWNLOADS </a>
              </div>
            </div>
            <div id="search">
              <i class="fas fa-search search"></i>
              <input
                type="text"
                id="input"
                name="searchBox"
                placeholder="Search for destinations"
              />
            </div>
            <div id="user">
              <a href="">
                {" "}
                <i class="fas fa-shopping-cart addedToCart">
                  <div id="badge"> 0 </div>
                </i>
              </a>
              <a href="">
                {" "}
                <i class="fas fa-user-circle userIcon"></i>{" "}
              </a>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
