import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext"


export default function DisplayLanguage () {
  const language = useContext(LanguageContext)

  const greetings = {
    it : {
      "HELLO": "Ben ritornato!",
      "CAPTION": "La vita è bella!"
    },
    en: {
      "HELLO": "Welcome back!",
      "CAPTION": "The life is beautiful!"
    }
  }

  return (
  <>
  <h3>{greetings[language]["HELLO"]}</h3>
  <p>{greetings[language]["CAPTION"]}</p>
  </>
  )
}