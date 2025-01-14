import React, { useEffect, useState } from "react";
import googleAppsIcon from "../assets/icons/googleappsicon.png";
import userIcon from "../assets/icons/usericon.png";

const Header = () => {
    const [isMobileorTablet, setisMobileorTablet] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
        setisMobileorTablet(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="google-header-main-container">
      <div className="google-header-left-box">
        <div className="google-header-about-box">
          <h4>About</h4>
        </div>
        <div className="google-header-store-box">
          <h4>Store</h4>
        </div>
            { isMobileorTablet && (
                <div className="google-header-left-box-upto-tab">
                    <div className="google-header-searchlab-box">
                        <svg
                            className="gb_D"
                            focusable="false"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px">
                            {" "}
                            <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path>{" "}
                        </svg>
                    </div>
                    <div className="google-header-all-box">
                        <h4>ALL</h4>
                    </div>
                    <div className="google-header-images-box-upto-tab">
                        <h4>IMAGES</h4>
                    </div>
                </div>
            )}
      </div>

      <div className="google-header-right-box">
        <div className="google-header-gmail-box">
          <h4>Gmail</h4>
        </div>
        <div className="google-header-images-box">
          <h4>Images</h4>
        </div>
        <div className="google-header-searchlab-box">
          <svg
            className="gb_D"
            focusable="false"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            {" "}
            <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path>{" "}
          </svg>
        </div>
        <div className="google-header-googleapps-box">
          <img src={googleAppsIcon} alt="google"></img>
        </div>
        <div className="google-header-userprofile-box">
          <img src={userIcon} alt="user"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
