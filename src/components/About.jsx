import React from "react";

const About = (props) => {

  return (
    <div>
    {/* <div className={props.darkMode && "darkMode"}> */}
      <h2
        role="button"
        onClick={() => {
          props.setHide({name: true, about: !props.hide.about, skills: true, projects: true, contact: true})
        }}
      >
        About
      </h2>
      <section hidden={props.hide.about}>
        <p>I have a Bachelors of Science in Horticulture,</p>
        <p>
          but I've excelled working in financial aid, tree care, and printing.
        </p>
        <h3>Now I am a React web developer and I love it!</h3>
      </section>
    </div>
  );
};

export default About;
