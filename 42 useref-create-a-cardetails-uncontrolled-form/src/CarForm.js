import { useRef } from "react"
import { useState } from "react"

export default function CarForm ({initialData}) {

    const carDetails = useRef("")
    const formName = useRef("")
    const formModel = useRef("")
    const formYear = useRef("")
    const formColor = useRef("")

    const [name, setName] = useState("Lamborghini")
    const [model, setModel] = useState("Miura")
    const [year, setYear] = useState("Year")
    const [color, setColor] = useState("Rosso")

    formName.value = name
    formModel.value = model
    formYear.value = year
    formColor.value = color

    const onSubmit = (e) => {
        e.preventDefault()
        console.log([formName.value, formModel.value, formYear.value, formColor.value])
    }

    return(
        <>
        <form ref={carDetails}>
          <input ref={formName} type="text" onChange={e => setName(e.target.value)} defaultValue={initialData.name}/>
          <input ref={formModel} type="text" onChange={e => setModel(e.target.value)} defaultValue={initialData.model}/>
          <input ref={formYear} type="text" onChange={e => setYear(e.target.value)} defaultValue={initialData.year}/>
          <input ref={formColor} type="text" onChange={e => setColor(e.target.value)} defaultValue={initialData.color}/>
          <button type="submit" onClick={onSubmit}>submit</button>
        </form>
      </>
    )
}