import React from "react";
import Logo from "../assests/Logo.png";
import "./Footer.css";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container text-center text-md-left">
      <div className="row justify-content-center align-items-center">
        <div className="footer-left-corner col-md-8 mt-md-0 mt-3">
          <img src={Logo} alt="" />
          <div className="paragraph mt-3 text-white">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </div>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />
        <div className="col-md-4 d-flex justify-content-between">
          <div className="mb-md-0 justify-content-end">
            <h5 className="text-white text-start"> Our Technologies</h5>
            <ul className="list-unstyled text-start">
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">
                  ReactJS
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">
                  Gatsby
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">
                  NextJS
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">
                  NodeJS
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-md-0 mb-3">
            <h5 className="text-white text-start">Our Services</h5>
            <ul className="list-unstyled text-start">
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">
                  Social Media Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">
                  Web & Mobile App Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white text-decoration-none">
                  Data & Analytics
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <hr className="hr-class" />

    <div className="footer-copyright text-center py-3 gap-10 ">
      <a href="./terms" className="px-3 fs-5">
        Terms & Conditions
      </a>
      <a href="./privacy"> | </a>
      <a href="./privacy" className="px-3 fs-5">
        Privacy Policy
      </a>
    </div>
  </footer>
);

export default Footer;
