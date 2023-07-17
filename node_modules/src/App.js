import "./App.css";
import {
  AboutMe,
  Contact,
  Navbar,
  Portfolio,
  Technologies,
} from "./screens";

// svgrepo.com

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;