import { useRef } from "react"
import { useState } from "react"

export default function CarForm ({defaultvalues}) {

    const carDetails = useRef("")
    const formname = useRef("")
    const formmodel = useRef("")
    const formyear = useRef("")
    const formcolor = useRef("")

    const [name, setName] = useState("Lamborghini")
    const [model, setModel] = useState("Miura")
    const [year, setYear] = useState("Year")
    const [color, setColor] = useState("Rosso")

    const onSubmit = (e) => {
        e.preventDefault()
        console.log([name, model, year, color])
    }

    return(
        <>
        <form ref={carDetails}>
          <input ref={formname} type="text" onChange={e => setName(e.target.value)} defaultValue={name}/>
          <input ref={formmodel} type="text" onChange={e => setModel(e.target.value)} defaultValue={defaultvalues.model}/>
          <input ref={formyear} type="text" onChange={e => setYear(e.target.value)} defaultValue={defaultvalues.year}/>
          <input ref={formcolor} type="text" onChange={e => setColor(e.target.value)} defaultValue={defaultvalues.color}/>
          <button type="submit" onClick={onSubmit}>submit</button>
        </form>
      </>
    )
}