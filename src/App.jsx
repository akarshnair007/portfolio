import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import { TypeAnimation } from "react-type-animation";
import {
  faAngular,
  faCss3Alt,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const subject = encodeURIComponent("Message from your website"); // Subject line for the email
    const body = encodeURIComponent(message); // Body of the email

    // Construct the mailto link
    const mailtoLink = `mailto:akarshnair007@gmail.com?subject=${subject}&body=${body}`;

    // Redirect the user to their email client with the mailto link
    window.location.href = mailtoLink;
  };
  return (
    <>
      {" "}
      <div className="firstPage py-5">
        <div className="row ms-5 d-flex align-items-center justify-content-center">
          <div className="col-1"></div>
          <div className="intro col-lg-3 ms-5 col-sm-12 ">
            <h4>
              Akarsh <span className="color">Nair</span>
            </h4>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                `A Full Stack  Developer`,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
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
            />{" "}
          </div>
          <div className="col-1"></div>
          <div className="col-lg-4 col-sm-12 rounded">
            <img
              style={{ borderRadius: "50%" }}
              src="/pic.jpg"
              className="img"
              height={150}
              width={150}
              alt=""
            />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <div className="aboutMe mt-5 py-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-1"></div>
          <div className="col-lg-4 col-sm-12">
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnpoNHB3Mzd6d3VvN282dXdhOTM5b2UwZjI1NG4zbTFiNjZmZGNzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
              alt=""
              className="gify"
              style={{ height: "400px", width: "400px", borderRadius: "30px" }}
            />
          </div>
          <div className="col-1"></div>

          <div className="col-lg-5 col-sm-12">
            <h3 className="text-center about">About Me</h3>
            <p className="about_text mt-3">
              I'm Akarsh Nair, a dedicated full-stack developer passionate about
              creating elegant, efficient solutions that make a difference. With
              expertise spanning both front-end and back-end development, I
              thrive on turning complex challenges into seamless user
              experiences. From crafting intuitive interfaces with React.js to
              architecting scalable server-side systems with Node.js, I'm driven
              by a commitment to excellence and a love for innovative
              problem-solving. Let's collaborate and bring your ideas to life!
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="projects py-5 bg-secondary">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h1 className="text-center project">My Projects</h1>
            <div className="row">
              <div className="col-lg-4 col-sm-12 mt-5">
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="/weather.png"
                    height={200}
                    width={400}
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">Weather App</Card.Title>
                    <Card.Text className="cardText">
                      Created Using HTML, Css(BootStrap Framework), Javascript
                      and React
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button variant="info">
                        <a
                          style={{ textDecoration: "none", color: "white" }}
                          href="https://graceful-otter-cd03ed.netlify.app/"
                        >
                          {" "}
                          Go to Project
                        </a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-sm-12  mt-5">
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="/travel.png"
                    height={200}
                    width={400}
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      Travel Website
                    </Card.Title>
                    <Card.Text className="cardText">
                      Created Using HTML, Css(BootStrap Framework) and
                      Javascript
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button variant="success">
                        <a
                          style={{ textDecoration: "none", color: "white" }}
                          href="https://legendary-tulumba-cc9c41.netlify.app/"
                        >
                          {" "}
                          Go to Project
                        </a>
                      </Button>
                    </div>{" "}
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-sm-12  mt-5">
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="resturant.png"
                    height={200}
                    width={400}
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      Resturant Site
                    </Card.Title>
                    <Card.Text className="cardText">
                      Created Using HTML, Css(BootStrap Framework)
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button variant="danger">
                        <a
                          style={{ textDecoration: "none", color: "white" }}
                          href="https://legendary-biscuit-0ba6b6.netlify.app/"
                        >
                          {" "}
                          Go to Project
                        </a>
                      </Button>
                    </div>{" "}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="skills pt-5 pb-5">
        <h1 className="text-center skill pb-3">My skills</h1>
        <div className="row mx-5 icon-container">
          <div className="col-lg-2 col-6 pt-5">
            <FontAwesomeIcon
              className="fa-4x html"
              icon={faHtml5}
              style={{ color: "#f5740a" }}
            />
          </div>
          <div className="col-lg-2 col-6 pt-5">
            <FontAwesomeIcon
              className="fa-4x css"
              icon={faCss3Alt}
              style={{ color: "#1790ee" }}
            />
          </div>
          <div className="col-lg-2 col-6 pt-5">
            <FontAwesomeIcon
              className="fa-4x js"
              icon={faJs}
              style={{ color: "#FFD43B" }}
            />
          </div>
          <div className="col-lg-2 col-6 pt-5">
            <FontAwesomeIcon
              className="fa-4x react"
              icon={faReact}
              style={{ color: "#74C0FC" }}
            />
          </div>
          <div className="col-lg-2 col-6 pt-5">
            <FontAwesomeIcon
              className="fa-4x angular"
              icon={faAngular}
              style={{ color: "#e13333" }}
            />
          </div>
          <div className="col-lg-2 col-6 pt-5">
            <FontAwesomeIcon
              className="fa-4x node"
              icon={faNode}
              style={{ color: "#0aff33" }}
            />
          </div>
        </div>
      </div>
      <div className="contactForm mt-1 py-4">
        <div className="row">
          <h2 className="mt-5 text-center">Contact Form</h2>
          <div className="col-lg-2 col-sm-12"></div>
          <div className="col-lg-4 col-sm-12 me-4 mt-4">
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXF6azd4MmNqbHcyd210aGVtanRyOWNyaTdtcmo0YmRiczhheGEzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nv6bOexvEyVV50U4Qz/giphy.gif"
              alt=""
              height={450}
              width={450}
            />
          </div>
          <div className="col-4 mt-4 bg-secondary rounded-2 form">
            <Form className="mt-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control
                  className="w-100 form-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label className="form-label">Message</Form.Label>
                <Form.Control
                  className="w-100 form-input"
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  required
                />
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center mt-5">
                <Button
                  className="d-flex text-align-center justify-content-center"
                  variant="dark"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
