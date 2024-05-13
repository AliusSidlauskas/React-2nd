import React from "react";
import styles from "./Count.module.css";
import { useState, useEffect } from "react";

const Count = () => {
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [isShowText, setIsShowText] = useState(true);

  useEffect(() => {
    console.log("First");

    return () => {
      console.log("END");
    };
  }, []);

  useEffect(() => {
    console.log("Second");
  }, [inputText1, inputText2]);

  useEffect(() => {
    console.log("Third");
  }, [inputText1, isShowText]);

  const inputChange1 = (e) => {
    setInputText1(e.target.value);
  };

  const inputChange2 = (e) => {
    setInputText2(e.target.value);
  };

  const toggleShowText = () => {
    setIsShowText(!isShowText);
  };

  return (
    <div>
      <input value={inputText1} onChange={inputChange1} />
      <input value={inputText2} onChange={inputChange2} />
      <button onClick={toggleShowText}>Press button</button>
      {(inputText1 === "" || inputText2 === "") && (
        <div>Fill both inputs</div>
      )}
    </div>
  );
};

export default Count;
