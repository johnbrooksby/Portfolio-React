import React from "react";

const Skills = (props) => {

  return (
    <div>
      <h2
        role="button"
        onClick={() => {
          props.setHide({
            name: true,
            about: true,
            skills: false,
            projects: true,
            contact: true,
          });
        }}
      >
        Skills
      </h2>
      <section hidden={props.hide.skills}>
        <p>I'm a quick learner, funny, easy to get along with,</p>
        <p>and I'm pretty handy at fixing stuff</p>
        <br />
        <p>I also know these things:</p>
        <br />
        <p>HTML, CSS, JavaScript, React, Node,</p>
        <p>Express, VScode, SQL, JWT, AWS</p>
      </section>
    </div>
  );
};

export default Skills;
