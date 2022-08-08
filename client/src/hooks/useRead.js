import { useState, useRef } from "react";

const useRead = (selected) => {
  const [isReading, setIsReading] = useState(false);
  const synth = useRef(window.speechSynthesis);
  const utterance = new SpeechSynthesisUtterance();

  const speakText = (text) => {
    utterance.text = text;
    utterance.voice = synth.current
      .getVoices()
      .find((voice) => voice.name === selected);
    synth.current.speak(utterance);

    utterance.onstart = () => setIsReading(true);
    utterance.onend = () => setIsReading(false);
  };

  return {
    speakText,
    isReading,
  };
};

export default useRead;
