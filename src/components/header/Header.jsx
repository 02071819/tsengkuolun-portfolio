import React from "react";
import "./header.css";
import CV from "../../assets/個人簡歷.docx.pdf";
import ME from "../../assets/IMG_3013.JPG";
import HeaderSocials from "./HeaderSocials";
import background from "../../assets/background.jpg";

const Header = () => {
  return (
    <header>
      <img src={background} alt="" class="header__bg" />
      <div className="container header__container">
        <div className="header_word" data-aos="fade-up"
     data-aos-duration="2000">
          <h5>Hello I'm</h5>
          <h1>Alan Tseng</h1>
          <h2 className="text-light">Student</h2>
          <h4>Hi ! 我是Alan曾國綸，對Web技術及UI/UX充滿熱情，熱於分享所學。樂觀誠實，持續成長，是我的學習態度。</h4>
          <br />
          <h4>Work hard,be kind and amazing things will happen.</h4>  

          <div className="cta">
//             <a href={CV} download className="header_btn">
              Download CV
//             </a>
          </div>
        </div>
        <HeaderSocials />

        <div className="me">
          {/* <img src={ME} alt="me" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
