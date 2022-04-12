import React from "react";
import "./header.css";
import CV from "../../assets/個人簡歷.docx.pdf";
import ME from "../../assets/IMG_E0531.JPG";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header_word">
          <h5>Hello I'm</h5>
          <h1>Alan Tseng</h1>
          <h2 className="text-light">Fullstack Developer</h2>
          <h4>Hi ! 我是Alan曾國綸，對Web技術及UI/UX充滿熱情，熱於分享所學。樂觀誠實，持續成長，是我的學習態度。</h4>
          <h4>Work hard,be kind and amazing things will happen.</h4>  

          <div className="cta">
            <a href={CV} download className="btn">
              Download CV
            </a>
          </div>
        </div>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
