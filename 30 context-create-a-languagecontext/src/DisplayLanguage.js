import React from "react";
import { createContext } from "react";

export const LanguageContext = createContext("en")

export default class DisplayLanguage extends React.Component {
    render(){
        return (
          <>
          ciao!
          </>
        )
      }
}