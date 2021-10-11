import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import ParticleAnimation from "react-particle-animation";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/tech/Technologies";
import ContactMe from "./screens/contactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <ParticleAnimation
        style={{ height: "96vh" }}
        background={{ r: 21, g: 22, b: 23, a: 1 }}
        particleSpeed={0.1}
        particleRadius={1.5}
        color={{ r: 255, g: 0, b: 104, a: 500 }}
      />
      <AboutMe />
      <Technologies />

      <ContactMe />
    </div>
  );
}

export default App;