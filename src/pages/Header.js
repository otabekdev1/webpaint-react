import React, { useState } from "react";
import Logo from "../imgs/logo.png";
export default function Header() {
  return (
    <header>
      <div class="container-fluid ">
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                style={{
                  width: "130px",
                }}
                src={Logo}
                alt=""
              />
            </a>
            <button
              style={{
                border: "2px solid gray",
              }}
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon menu-button">
                <div class="menu-button-line"></div>
                <div class="menu-button-line"></div>
                <div class="menu-button-line"></div>
              </span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li class="nav-item  ">
                  <a class="nav-link  " href="#">
                    PORTFOLIO
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                <li class="nav-item   ">
                  <a class="nav-link  " href="#">
                    BLOG
                  </a>
                </li>
                <li class="nav-item  ">
                  <a class="nav-link  " href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col m-auto">
              <h1 className="header-h1">
                We are <span className="display-9 ">Webpaint</span>
              </h1>
              <p
                className="col-12"
                style={{
                  marginBottom: "33px",
                }}
              >
                digital & branding agency based in Jupiter and we would love{" "}
                <br /> to turn ideas into beautiful things.
              </p>
              <button className="btn">See Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
