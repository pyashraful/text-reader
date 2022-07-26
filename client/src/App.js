import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconContext } from "react-icons";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  // const synthRef = useRef(window.speechSynthesis);
  // const [voices, setVoices] = useState();
  // const [selected, setSelected] = useState();

  // function speakText(text) {
  //   const utterThis = new SpeechSynthesisUtterance(text);
  //   utterThis.voice = voices.find((voice) => voice.name === selected);
  //   synthRef.current.speak(utterThis);
  // }

  // useEffect(() => {
  //   setVoices(synthRef.current.getVoices());
  // }, []);

  return (
    <>
      <Router>
        <IconContext.Provider value={{ size: "1.25rem", className: "icons" }}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Layout>
        </IconContext.Provider>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
