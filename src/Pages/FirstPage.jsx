import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const FirstPage = () => {
  return (
    <div className="firstPage py-5 w-full text-center">
      <div className="row d-flex align-items-center justify-content-center text-center">
        <div className="col-lg-3 col-sm-12 mb-4 d-flex flex-column justify-content-center text-center">
          <h4 className="intro">
            Akarsh <span className="color">Nair</span>
          </h4>
          <TypeAnimation
            sequence={[
              "A Full Stack Developer",
              1000,
              "A Frontend Developer",
              1000,
              "A Web Developer",
              1000,
              "A Software Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-animation"
            repeat={Infinity}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="col-lg-4 col-sm-12 mb-4"
        >
          <img
            src="/pic.jpg"
            className="img-fluid rounded-circle"
            alt="Akarsh Nair"
            style={{ height: "200px", width: "200px" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FirstPage;
