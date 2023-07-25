import React from "react";
import "./about.css";
import ME from "../../assets/IMG_E0531.JPG";
import { MdOutlineComputer } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" className="about">
      <h5>關於我</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards" data-aos="fade-up" data-aos-duration="2000">
            <article className="about__card">
              <MdOutlineComputer className="about__icon" />
              <h4>Frontend Develop</h4>
              <h5>前端開發</h5>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h4>UI/UX <br/> Design</h4>
              <h5>使用者設計</h5>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h4>Projects</h4>
              <h5>5+ Completed</h5>
            </article>
          </div>
          
          <p data-aos="fade-up" data-aos-duration="3000">
            國立臺北教育大學 數位科技設計學系即將畢業，即將就讀國立中山大學 資訊管理碩士班，在學過程中接觸並喜愛上網站開發，決定以網站開發工程師作為職涯起點。<br /><br />
            目前正自學PHP、MySQL、NodeJS、MongoDB，希望更加增進自己後端能力，未來也會往數據分析、網路爬蟲、RPA等領域上學習。在學生時期與3位同學完成一個完整的專案，
            在專案中負責專案管理監督、後端資料庫撰寫的角色，製作一個小型B2C電子商務網站。<br /><br />
            我也會不斷的透過線上資源來精進我的開發技能，除了持續進修程式技能外，也喜愛參與關於商務、
            UIUX或產品管理的分享活動，希望藉由接觸多元活動，能跳脫工程師思維，站在多方角度來學習開發產品。<br /><br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
