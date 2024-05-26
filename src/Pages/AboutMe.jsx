import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutMe py-5">
      <div className="row d-flex align-items-center justify-content-center text-center">
        <div className="col-lg-4 col-sm-12 mb-4">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnpoNHB3Mzd6d3VvN282dXdhOTM5b2UwZjI1NG4zbTFiNjZmZGNzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
            alt=""
            className="gify"
            style={{ height: "300px", width: "300px", borderRadius: "30px" }}
          />
        </div>
        <div className="col-lg-5 col-sm-12 mb-4">
          <h3 className="text-center about">About Me</h3>
          <p className="about_text mt-3">
            I'm Akarsh Nair, a dedicated full-stack developer passionate about
            creating elegant, efficient solutions that make a difference. With
            expertise spanning both front-end and back-end development, I thrive
            on turning complex challenges into seamless user experiences. From
            crafting intuitive interfaces with React.js to architecting scalable
            server-side systems with Node.js, I'm driven by a commitment to
            excellence and a love for innovative problem-solving. Let's
            collaborate and bring your ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
