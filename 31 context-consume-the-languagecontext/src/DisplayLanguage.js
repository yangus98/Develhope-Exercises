import React from "react";
import { LanguageContext } from "./LanguageContext"

const Strings = {
  en:{
    GREETINGS: "Hello, Welcome"
  },
  it:{
    GREETINGS: "Ciao, Benvenuto"
  }
}

export default class DisplayLanguage extends React.Component {
    render(){
        return (
          <>
          <LanguageContext.Consumer>
            {Language => {
                return(
                  <div>
                    <h1>
                      {Strings[Language].GREETINGS}
                    </h1>
                  </div>
                )
              }
            }

          </LanguageContext.Consumer>
          </>
        )
      }
}