import { useRef } from "react"
import { useState } from "react"

export default function CarForm ({initialData}) {

    const carDetails = useRef("")
    const formName = useRef("")
    const formModel = useRef("")
    const formYear = useRef("")
    const formColor = useRef("")

    const [name, setName] = useState(initialData.name)
    const [model, setModel] = useState(initialData.model)
    const [year, setYear] = useState(initialData.year)
    const [color, setColor] = useState(initialData.color)

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
          <input ref={formName} type="text" onChange={e => setName(e.target.value)} defaultValue={name}/>
          <input ref={formModel} type="text" onChange={e => setModel(e.target.value)} defaultValue={model}/>
          <input ref={formYear} type="text" onChange={e => setYear(e.target.value)} defaultValue={year}/>
          <input ref={formColor} type="text" onChange={e => setColor(e.target.value)} defaultValue={color}/>
          <button type="submit" onClick={onSubmit}>submit</button>
        </form>
      </>
    )
}