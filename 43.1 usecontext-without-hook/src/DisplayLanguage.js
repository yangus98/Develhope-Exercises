import React from "react";
import { useState } from "react";

export default function DisplayLanguage () {
 
  const [language, setLanguage] = useState ("en")

function handleLanguageChange (event){
  setLanguage(event.target.value) 
};

  const greetings = {
    it : {
      "HELLO": "Ben ritornato!",
      "CAPTION": "La vita è bella!",
      "CURRENT" : "Lingua corrente: "
    },
    en: {
      "HELLO": "Welcome back!",
      "CAPTION": "The life is beautiful!",
      "CURRENT": "Current language: "
    }
  }

  return (
  <>
  <b>{greetings[language]["CURRENT"]}</b>
  <select value={language} onChange={handleLanguageChange}>
    <option value="en">ENGLISH</option>
    <option value="it">ITALIANO</option>
  </select>
  <h3>{greetings[language]["HELLO"]}</h3>
  <p>{greetings[language]["CAPTION"]}</p>
  </>
  )
}