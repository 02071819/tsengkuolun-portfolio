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
import Cocktail from "../../assets/cocktail_bg.jpg";
import CarDesign from "../../assets/Car_design.png";
import Ptt_analy from "../../assets/ptt分析.jpg";
import House_analy from "../../assets/MacBook-Pro-15_1.jpg";
import Onlineshop_analy from "../../assets/MacBook-Pro-15_2.jpg";

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
    github: "https://winhorn.000webhostapp.com/",
    demo: "https://www.youtube.com/watch?v=Cn9_tdfwqm4&t=4s&ab_channel=KuoLunTseng",
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
  {
    id: 9,
    image: Cocktail,
    title: "調酒介紹網",
    content:"此作品運用Vue框架製作，以調酒為主題，讓瀏覽者更加認識酒類與經典調酒的相關知識。",
    github: "https://github.com/02071819/wine_project",
    demo: "https://wine-project-seven.vercel.app/",
    filter: "web"
  },
  {
    id: 10,
    image: CarDesign,
    title: "Figma - 汽車官網 Web 設計",
    content:"運用Figma工具，以汽車官網為主題設計Web網頁，以黑色與白色為主色調呈現，分 首頁、商品頁、商品細節頁等頁面。",
    github: "https://www.figma.com/proto/cSaEeUkKMXarBbxXUtW9ah/%E5%80%8B%E4%BA%BA%E5%8C%96%E5%95%86%E5%BA%97Web?node-id=0-1&t=fm6bHGVafjzJb8ry-1",
    demo: "https://dribbble.com/shots/25163072-STAR-CAR-Car-E-commerce-Website?utm_source=Clipboard_Shot&utm_campaign=alan_tseng&utm_content=STAR%20CAR%20-%20Car%20E-commerce%20Website&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=alan_tseng&utm_content=STAR%20CAR%20-%20Car%20E-commerce%20Website&utm_medium=Social_Share",
    filter: "design"
  },
  {
    id: 11,
    image: Ptt_analy,
    title: "探討2023年的八卦板鄉民對於物價上漲的反應",
    content:"運用python爬蟲與分析，以PTT八卦板對於從2023年1月1日~3月31日中4,500多筆文字資料來分析大眾對於物價上漲的反應，關鍵字詞為物價、疫情。",
    github: "https://github.com/02071819/SMA_project",
    demo: "https://docs.google.com/presentation/d/1JOBEVSDVov30I4xWWkTgymTbGCEaRcrJWN6vCypnC8U/edit?usp=sharing",
    filter: "analysis"
  },
  {
    id: 12,
    image: House_analy,
    title: "房價資料分析及機器學習",
    content:"運用python爬蟲與分析，收集26,000多筆2024年11月房屋價格數據，而後進行迴歸分析，並使用 Power BI進行資料視覺化的呈現，以分析台北、新北、桃園、新竹、台中、彰化、雲林、嘉義、台南及高雄的各類型房價資料。",
    github: "https://colab.research.google.com/drive/1hxjEMP2aVqrnnFxHA207WPkQhNXte0wn?usp=sharing",
    demo: "https://docs.google.com/presentation/d/1ixbMm8N8kbEAPegFfwvV7duDTsLDsQjEGxArRg-Z2ik/edit?usp=sharing",
    filter: "analysis"
  },
  {
    id: 13,
    image: Onlineshop_analy,
    title: "線上購物者的行為分析與模型探討",
    content:"運用python分析UCI公開資料平台上的Online Shoppers Purchasing Intention資料集，以12,000多筆資料預測線上買家的行為，透過機器學習模型訓練與SHAP分析，探討不同模型間預測上的表現，其模型準確率達 90%以上",
    github: "https://colab.research.google.com/drive/1LNcpmL5fkxvUDdjy9n9pW2mstHEvj-Ao?usp=sharing",
    demo: "https://docs.google.com/presentation/d/1WGXcgSr5AOJZ2kGmuStY5rsA_b0Wuj4NQo5O3t6xUNM/edit?usp=sharing",
    filter: "analysis"
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
        <span className="work__item btn btn-warning" onClick={() => filterItem('analysis')}>Analysis</span>
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
