import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext"
import { useState } from "react"

export default function App () {

  const [language, setLanguage] = useState ("en")

  function handleLanguageChange (event){
    setLanguage(event.target.value) 
  };

    return (
      <>
      <div>
        <b>Current language: </b>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">ENGLISH</option>
          <option value="it">ITALIANO</option>
        </select>
        <LanguageContext.Provider value={language}>
        <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
      </>
    )
}
