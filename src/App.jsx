import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FirstPage from "./Pages/FirstPage";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import Skill from "./Pages/Skill";
import ContactForm from "./Pages/ContactForm";

function App() {
  return (
    <div>
      <FirstPage />

      <AboutMe />

      <Projects />

      <Skill />

      <ContactForm />
    </div>
  );
}

export default App;
