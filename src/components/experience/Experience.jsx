import React, { useState } from "react";
import "./experience.css";
import IMG1 from "../../assets/board1.jpg";
import IMG2 from "../../assets/board2.jpg";
import IMG3 from "../../assets/board3.jpg";
import AppIMG4 from "../../assets/board4.jpg";
import IMG5 from "../../assets/board5.png";
import IMG6 from "../../assets/board6.png";
import ArtIMG1 from "../../assets/Artboard 1.jpg";
import Easystore from "../../assets/Easystore.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "動物保育網頁製作",
    content:"此作品以HTML、CSS、JavaScript純前端技術製作，以動保為主題內容，劃分五大專案目標、物種保育、募資計畫、消息分享，讓瀏覽者更加重視且了解動物保育的知識。",
    github: "https://github.com/02071819/Animal_Support",
    demo: "https://02071819.github.io/Animal_Support/index",
    filter: "web"
  },
  {
    id: 2,
    image: IMG2,
    title: "台東民宿觀光旅遊網",
    content:"React.js、Commerce.js框架撰寫，減輕旅遊前過度繁瑣的準備流程，讓使用者能夠在旅遊前也能保持愉快的心情。",
    github: "https://github.com/02071819/react_final",
    demo: "https://react-final-nine.vercel.app/",
    filter: "web"
  },
  {
    id: 3,
    image: IMG3,
    title: "汽車商形象網頁製作",
    content:"此作品以HTML、CSS、JavaScript純前端技術製作，以汽車為主題內容，劃分介紹、熱門產品、特色介紹區塊，具有 RWD切版，方便使用者瀏覽。",
    github: "https://github.com/02071819/Car_Web",
    demo: "https://02071819.github.io/Car_Web/index",
    filter: "web"
  },
  {
    id: 4,
    image: AppIMG4,
    title: "台北旅遊寶",
    content:"以React Native框架撰寫，一款純導覽型APP，裡面功能提供台北熱門的景點、美食、飯店，讓每個來台北的外國人或非當地人都能透過我們的APP迅速了解台北好玩好吃的事物。    ",
    github: "https://github.com/02071819/React-native-Final",
    demo: "https://www.youtube.com/watch?v=1Xfpi7hPZqA",
    filter: "app"
  },
  {
    id: 5,
    image: IMG6,
    title: "名錶電商網頁製作",
    content:"此作品以NodeJS後端技術製作，結合雙資料庫MySQL+MongoDB，以Roger Dubuis名錶買賣為主題內容，仿製全端架構的基本電商網站。此網頁具備購物車、登入/註冊與後台管理平台等後端功能",
    github: "https://github.com/02071819/nodejs_watch_web",
    demo: "https://www.youtube.com/watch?v=l4RIgWVTQ_k",
    filter: "web"
  },
  {
    id: 6,
    image: IMG5,
    title: "文宏體育用品社 電商平台",
    content:"B2C全端式電商網站，與3位同學以HTML、CSS、JavaScript、Bootstrap、PHP、MySQL一同撰寫，透過這個網站了解到這間店的歷史、店家的起源和中間轉變的過程及店家提供的專業服務，也提供使用者可以對喜歡的商品進行購買，並提供完整的後台功能讓商家做管理，希望能夠透過這個網站讓這間充滿特色和優良服務的老店被更多人知曉。",
    github: "https://github.com/02071819/Grad_Project2",
    demo: "https://winhorn.000webhostapp.com/",
    filter: "web"
  },
  {
    id: 7,
    image: ArtIMG1,
    title: "Figma - 植物電子商店 App 設計",
    content:"運用Figma工具，以植物電子商店為主題設計電商app，綠色和黑色為主色調呈現，分註冊、登入、首頁、商品頁、個人頁等頁面。",
    github: "https://www.figma.com/file/Frzazy9levnEcgTMD5zFtn/HW5.1-iOS-App-%E8%A8%AD%E8%A8%88?node-id=0%3A1",
    demo: "https://www.youtube.com/watch?v=udcM9DmbRXI",
    filter: "design"
  },
  {
    id: 8,
    image: Easystore,
    title: "進口車電商平台",
    content:"此作品運用EasyStore平台快速建置電商平台，此作品以進口車為主題，搭配線上虛擬官網預約訂購與現下實體店面賞車試乘，達到OMO理念，並結合IG、FB做行銷。",
    github: "https://exoticcar.easy.co/",
    demo: "https://youtu.be/gIVxHsceoVE",
    filter: "web"
  },
];

const Experience = () => {

  const [items, setItems] = useState(data);

  const filterItem = (categItem) => {
    const updatedItems = data.filter((curElem) => {
      return curElem.filter === categItem;
    });

    setItems(updatedItems);
  }

  return (
    <section id="experience" className='experience__session'>
      <h5>專案作品</h5>
      <h2>My Recent Work</h2>

      <div className="work__filters">
        {/* <span className="work__item active-work" onClick={() => setItems(data)}>All</span> */}
        <span className="work__item btn btn-warning" onClick={() => filterItem('web')}>Web</span>
        <span className="work__item btn btn-warning" onClick={() => filterItem('app')}>App</span>
        <span className="work__item btn btn-warning" onClick={() => filterItem('design')}>Design</span>
      </div>

      <div className="container portfolio__container" data-aos="fade-up" data-aos-duration="2000">
        {items.map(({ id, image, title, content, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}  alt={title} />
              </div>

              <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-info">{content}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className="link_btn" target="_blank">專案連結</a>
                  <a href={demo} className="btn btn-primary" target="_blank">作品展示</a>
                </div>
              </div>
            </article>
          );
        })}
        
      </div>
    </section>
    
  );
};

export default Experience;
