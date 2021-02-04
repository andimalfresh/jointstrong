import React from "react";
import facebook_icon from "./img/icons/001-facebook.svg"
import twitter_icon from "./img/icons/002-twitter.svg"
import instagram_icon from "./img/icons/011-instagram.svg"
import youtube_icon from "./img/icons/008-youtube.svg"

const Footer= () => {

  return (
    <div className="socialDiv">
      {/* <div className="modalButton">
        <button id="connectWithUs" className="contactButton" >
          Request a Demo
        </button>
        <span>Contact us today for a personalized demonstration.</span>
        
      </div> */}
      <div className="socialWrapper">
        <div className="socialContact">
          <img
            className="socialLogo"
            // src={require("./img/svg/imc-logo.svg")}
          ></img>
          <div className="contactLinks is-justify-content-space-evenly">
            <div className="socialButton">
              <a href="/">HOME </a>
            </div>
            <div className="socialButton">
              <a href="/solutions">SOLUTIONS</a>
            </div>
            <div className="socialButton">
              <a href="/blog">BLOG</a>
            </div>
            <div className="socialButton">
              <a href="/contact">CONTACT</a>
            </div>
          </div>
          <div className="socialIcons">
            <a href="http://facebook.com">
              <img
                className="socialImg m-5"
                src={facebook_icon}
              />
            </a>
            <a href="http://facebook.com">
              <img
                className="socialImg m-5"
                src={twitter_icon}
              />
            </a>
            <a href="http://facebook.com">
              {" "}
              <img
                className="socialImg m-5"
                src={instagram_icon}
              />
            </a>
            <a href="http://facebook.com">
              {" "}
              <img
                className="socialImg m-5"
                src={youtube_icon}
              />
            </a>
          </div>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <div className="addressList has-text-centered">Interated Muscdivoskeletal Care</div>
          <div className="addressList has-text-centered">
            <div>2615 Centennial Blvd. Suite 101</div>
            <div>Tallahassee, FL, USA Telephone:</div>
            <div>850.656.3083</div>
            <div>Email: info@imcpt.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
