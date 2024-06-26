import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import "./skill.css";
import {BiImages} from 'react-icons/bi';

import HTML from "../../assets/html_icon.png";
import CSS from "../../assets/css_icon.png";
import JS from "../../assets/js_icon.png";
import REACT from "../../assets/react_icon.png";
import FIGMA from "../../assets/figma_icon.png";
import PS from "../../assets/photoshop_icon.png";
import PHP from "../../assets/php_icon.png";
import NODEJS from "../../assets/nodejs_icon.png";
import PYTHON from "../../assets/Python-logo-notext.svg.png";
import Paper1 from "../../assets/paper1.png";
import Paper2 from "../../assets/paper2.jpg";
import Paper3 from "../../assets/paper3.png";
import Paper4 from "../../assets/paper4.png";
import Paper5 from "../../assets/paper5.PNG";
import Paper6 from "../../assets/paper6.PNG";
import Paper7 from "../../assets/paper7.png";
import Paper8 from "../../assets/paper8.png";
import Paper9 from "../../assets/Hahow 好學校完課證明 - 學習 AI 一把抓：點亮人工智慧技能樹.png";
import Paper10 from "../../assets/綠E盎然_消基會參賽證明_page-0001.jpg";
import Paper11 from "../../assets/toeic_certificate.JPG";
import Paper12 from "../../assets/AWSome.jpg";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Skill = () => {
  let data1 = [
    {
      id: 1,
      Paperimage: Paper1,
      title: "CISCO完課證明",
      content: "資安概論",
    },
    {
      id: 2,
      Paperimage: Paper3,
      title: "Hahow完課證明",
      content: "產品設計實戰",
    },
    {
      id: 3,
      Paperimage: Paper7,
      title: "HISKIO完課證明",
      content: "Node.js打造購物車與後台管理系統",
    },
    {
      id: 4,
      Paperimage: Paper4,
      title: "參與 TAICHI 2019",
      content: "大會志工證明",
    },
    {
      id: 5,
      Paperimage: Paper5,
      title: "DeltaMOOCx證明",
      content: "智慧商務導論",
    },
    {
      id: 6,
      Paperimage: Paper6,
      title: "台大資訊系統訓練班證明",
      content: "PHP+MySQL程式設計班",
    },
    {
      id: 7,
      Paperimage: Paper9,
      title: "Hahow完課證明",
      content: "學習 AI 一把抓：點亮人工智慧技能樹",
    },
    {
      id: 8,
      Paperimage: Paper10,
      title: "ATCC X YLL 永續創新個案大賽",
      content: "參賽證明",
    },
    {
      id: 9,
      Paperimage: Paper12,
      title: "AWSome DAY 線上雲端培訓日",
      content: "上課證明",
    },
  ];

  let data2 = [
    {
      id: 1,
      Paperimage: Paper2,
      title: "TQC證照",
      content: "電子商務概論",
    },
    {
      id: 2,
      Paperimage: Paper8,
      title: "GOOGLE數位行銷學程",
      content: "基礎數位行銷資格認證",
    },
    {
      id: 3,
      Paperimage: Paper11,
      title: "多益證照",
      content: "Listening and Reading",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");

  const getImg = (Paperimage) => {
    setTempingSrc(Paperimage);
    setModel(true);
  };

  return (
    <section id="skill">
      <h5>關於技能 & 所學</h5>
      <h2>My Skills & Learn</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container graphbox-container">
          <SwiperSlide className="graphbox">
            <img src={HTML} alt="" />
            <h3>HTML5</h3>
          </SwiperSlide>

          <SwiperSlide className="graphbox">
            <img src={CSS} alt="" />
            <h3>CSS3</h3>
          </SwiperSlide>

          <SwiperSlide className="graphbox">
            <img src={JS} alt="" />
            <h3>Javascript</h3>
          </SwiperSlide>

          <SwiperSlide className="graphbox">
            <img src={FIGMA} alt="" />
            <h3>Figma</h3>
          </SwiperSlide>

          <SwiperSlide className="graphbox">
            <img src={PS} alt="" />
            <h3>Photoshop</h3>
          </SwiperSlide>

          <SwiperSlide className="graphbox">
            <img src={REACT} alt="" />
            <h3>React</h3>
          </SwiperSlide>

          <SwiperSlide className="graphbox">
            <img src={PHP} alt="" />
            <h3>PHP</h3>
          </SwiperSlide>

          <SwiperSlide className="graphbox">
            <img src={NODEJS} alt="" />
            <h3>NodeJS</h3>
          </SwiperSlide>

          <SwiperSlide className="graphbox">
            <img src={PYTHON} alt="" />
            <h3>Python</h3>
          </SwiperSlide>
        </div>
      </Swiper>

      <div className={model ? "model open" : "model"}>
        <img src={tempingSrc} />
        <IoMdCloseCircleOutline
          onClick={() => setModel(false)}
          className="close"
        />
      </div>

      <div className="skillboard">
        <div className="graphbox2-container">
        <h5>自我學習 & 進修</h5>
        <h2>My Learning</h2>
        <br />
          {data1.map(({ id, Paperimage, title, content }) => {
            return (
              <article key={id}>
                <div className="graphbox2">
                  {/* <img src={Paperimage}/> */}
                  <h3 onClick={() => getImg(Paperimage)}>
                    <BiImages /> {title} {content} 
                  </h3>
                </div>
              </article>
            );
          })}
        </div>

        <div className="graphbox2-container">
        <h5>證照</h5>
        <h2>My certificate</h2>
        <br />
          {data2.map(({ id, Paperimage, title, content }) => {
            return (
              <article key={id}>
                <div className="graphbox2">
                  {/* <img src={Paperimage}/> */}
                  <h3 onClick={() => getImg(Paperimage)}>
                  <BiImages /> {title} {content}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* <div className="container box-container">
        <div className="box">
          <div className="progress">
            <h3>
              Web Design<span>90%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              App Design<span>90%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              photoshop<span>80%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              php<span>75%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div>
        
        <div className="box">
          <div className="progress">
            <h3>
              nodeJS<span>60%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              python<span>65%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              MySQL<span>80%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              MongoDB<span>60%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Skill;
