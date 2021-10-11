import "./App.css";
import Navigation from "./screens/navBar/nav";
// import Header from "./screens/header/header";
import AboutMe from "./screens/about_me/about_me";
import Tech from "./screens/tech/tech";
import ContactMe from "./screens/contact_me/contact_me";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Header /> */}
      {/* <ParticleAnimation
        style={{ height: "96vh" }}
        background={{ r: 21, g: 22, b: 23, a: 1 }}
        particleSpeed={0.1}
        particleRadius={1.5}
        color={{ r: 255, g: 0, b: 104, a: 500 }}
      /> */}
      <AboutMe />
      <Tech/>

      <ContactMe />
    </div>
  );
}

export default App;