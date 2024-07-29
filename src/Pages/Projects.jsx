import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const all_projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "Created Using HTML, CSS (Bootstrap Framework), JavaScript, and React",
      image: "/weather.png",
      link: "https://graceful-otter-cd03ed.netlify.app/",
    },
    {
      id: 2,
      title: "Travel Website",
      description:
        "Created Using HTML, CSS (Bootstrap Framework), and JavaScript",
      image: "/travel.png",
      link: "https://legendary-tulumba-cc9c41.netlify.app/",
    },
    {
      id: 3,
      title: "Restaurant Site",
      description: "Created Using HTML, CSS (Bootstrap Framework)",
      image: "/resturant.png",
      link: "https://legendary-biscuit-0ba6b6.netlify.app/",
    },
    {
      id: 4,
      title: "Job Portal clone",
      description: "It is Full Stack MERN project",
      image: "/job_portal.png",
      link: "https://netflix-react-e6632.web.app",
    },
    {
      id: 5,
      title: "Nike clone",
      description:
        "Created Using HTML, Bootstrap, JS And React and React Slick",
      image: "/nike.png",
      link: "https://nike-clone-react-zeta.vercel.app/",
    },
    {
      id: 6,
      title: "Whisper Wall",
      description:
        "Created Using HTML, TailwindCSS, JS , React, React Redux And Json Server",
      image: "/whisper.png",
      link: "https://whisper-wall-frontend.vercel.app/",
    },
  ];

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects py-5">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, scale: 0, y: -10 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-center intro"
        >
          My <span className="color">Projects</span>
        </motion.h1>
        <div className="row">
          {all_projects.map((project, index) => (
            <divv key={project.id} className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                className="card-container"
              >
                <Card
                  className="card shadow"
                  onClick={() => handleShowModal(project)}
                >
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button variant="info">
                        <a
                          href={project.link}
                          className="text-white"
                          style={{ textDecoration: "none" }}
                        >
                          Go to Project
                        </a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </divv>
          ))}
        </div>

        <AnimatePresence>
          {showModal && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="modal-container"
            >
              <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                  <Modal.Title>{selectedProject.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="img-fluid"
                    height={"100%"}
                  />
                  <p>{selectedProject.description}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      variant="info"
                      href={selectedProject.link}
                      className="text-white item-center text-center"
                    >
                      Go to Project
                    </Button>
                  </div>
                </Modal.Body>
              </Modal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
