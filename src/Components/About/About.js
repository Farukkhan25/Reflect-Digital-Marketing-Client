import React from 'react';
import "./About.css";

import aboutImg from "../../assets/images/about-us.jpg";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "Brand Awareness",
    desc: "Brand awareness is the extent to which customers are able to recall or recognize a brand under different conditions.",
  },

  {
    icon: "ri-team-line",
    title: "Dedicated Person",
    desc: "The dedicated team model means what it says on the tin. It is a remote team of company dedicated to the realization.",
  },

  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Customer Services",
    desc: "A customer service strategy that involves providing 24 hours a day, and 7 days a week.A customer get their issue resolved.",
  },
];

const About = () => {
    return (
      <section id="about">
        <div className="container">
          <div className="about__wrapper lg:px-20 px-4">
            <div className="about__content">
              <h6 className="subtitle">Why choose me</h6>
              <h2>Specialist in avoiding clients on</h2>
              <h2 className="highlight"> financial challenges</h2>
              <p className="description about__content-desc">
                Managing expectations, communication, and industry-wide
                complexity are some of the top challenges financial advisors
                face today.
              </p>
              <div className="choose__item-wrapper">
                {chooseData.map((item, index) => (
                  <div className="choose__us-item" key={index}>
                    <span className="choose__us-icon">
                      <i class={item.icon}></i>
                    </span>
                    <div>
                      <h4 className="choose__us-title">{item.title}</h4>
                      <p className="description">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about__img">
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;