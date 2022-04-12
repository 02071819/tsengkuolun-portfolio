import React, { useState } from "react";
import "./experience.css";
import IMG1 from "../../assets/Artboard 1.jpg";
import { faAreaChart } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "web1",
    github: "https://github.com",
    demo: "https://github.com",
    filter: "web"
  },
  {
    id: 2,
    image: IMG1,
    title: "web2",
    github: "https://github.com",
    demo: "https://github.com",
    filter: "web"
  },
  {
    id: 3,
    image: IMG1,
    title: "app3",
    github: "https://github.com",
    demo: "https://github.com",
    filter: "app"
  },
  {
    id: 4,
    image: IMG1,
    title: "web4",
    github: "https://github.com",
    demo: "https://github.com",
    filter: "web"
  },
  {
    id: 5,
    image: IMG1,
    title: "web5",
    github: "https://github.com",
    demo: "https://github.com",
    filter: "web"
  },
  {
    id: 6,
    image: IMG1,
    title: "design6",
    github: "https://github.com",
    demo: "https://github.com",
    filter: "design"
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
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="work__filters">
        {/* <span className="work__item active-work" onClick={() => setItems(data)}>All</span> */}
        <span className="work__item" onClick={() => filterItem('web')}>Web</span>
        <span className="work__item" onClick={() => filterItem('app')}>App</span>
        <span className="work__item" onClick={() => filterItem('design')}>Design</span>
      </div>

      <div className="container portfolio__container">
        {items.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}  alt={title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, recusandae.
                </p>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
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
