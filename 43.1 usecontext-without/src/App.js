import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext"

export default function App () {

    return (
      <>
      <div>
        <LanguageContext.Provider>
        <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
      </>
    )
}
