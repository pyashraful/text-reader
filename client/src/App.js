import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { getVoices } from "../src/feactures/speak/speakSlice";

function App() {
  const dispatch = useDispatch();

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

  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    const vo = synthRef.current.getVoices().map((v) => v.name);
    dispatch(getVoices([...vo]));
  }, [dispatch]);

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
