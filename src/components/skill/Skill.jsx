import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import "./skill.css";
import HTML from "../../assets/html_icon.png";
import CSS from "../../assets/css_icon.png";
import JS from "../../assets/js_icon.png";
import REACT from "../../assets/react_icon.png";
import FIGMA from "../../assets/figma_icon.png";
import PS from "../../assets/photoshop_icon.png";
import php from "../../assets/php_icon.png";
import NODEJS from "../../assets/nodejs_icon.png";
import Paper1 from "../../assets/paper1.png";
import Paper2 from "../../assets/paper2.jpg";
import Paper3 from "../../assets/paper3.png";
import Paper4 from "../../assets/paper4.png";
import Paper5 from "../../assets/paper5.JPG";
import Paper6 from "../../assets/paper6.JPG";
import {IoMdCloseCircleOutline} from "react-icons/io";

const Skill = () => {
  let data = [
    {
      id: 1,
      Paperimage: Paper1,
      title: 'CISCO完課證明',
      content: '資安概論',
    },
    {
      id: 2,
      Paperimage: Paper2,
      title: 'TQC證照',
      content: '電子商務概論',
    },
    {
      id: 3,
      Paperimage: Paper3,
      title: 'Hahow完課證明',
      content: '產品設計實戰',
    },
    {
      id: 4,
      Paperimage: Paper4,
      title: '參與 TAICHI 2019',
      content: '大會志工',
    },
    {
      id: 5,
      Paperimage: Paper5,
      title: 'DeltaMOOCx完課證明',
      content: '智慧商務導論',
    },
    {
      id: 6,
      Paperimage: Paper6,
      title: '台大資訊系統訓練班完課證明',
      content: 'PHP+MySQL程式設計班',
    },
  ];

  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState('');

  const getImg = (Paperimage) =>{
    setTempingSrc(Paperimage);
    setModel(true);
  }
  
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
            <img src={php} alt="" />
            <h3>PHP</h3>
          </SwiperSlide>

          <SwiperSlide className="graphbox">
            <img src={NODEJS} alt="" />
            <h3>NodeJS</h3>
          </SwiperSlide>
        </div>
      </Swiper>

       <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
        data-aos="fade-up" data-aos-duration="2000"
      >
        <div className={model? "model open" : "model"}>
          <img src={tempingSrc} />
          <IoMdCloseCircleOutline onClick={() => setModel(false)} className="close"/>
        </div>

        <div className="graphbox2-container">
          {data.map(({ id, Paperimage, title, content }) => {
            return (
              <article key={id}>
                <SwiperSlide className="graphbox2">
                  <img src={Paperimage} onClick={() => getImg(Paperimage)}/>
                  <h3>{title}<br />{content}</h3>
                </SwiperSlide>
              </article>
            );
          })}
        </div>
      </Swiper>

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
