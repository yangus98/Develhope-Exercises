import { useRef } from "react"
import { useState } from "react"
export default function CarForm ({defaultvalues}) {

    const carDetails = useRef("")
    const formname = useRef("")
    const formmodel = useRef("")
    const formyear = useRef("")
    const formcolor = useRef("")

    const [name, setName] = useState()
    const [model, setModel] = useState()
    const [year, setYear] = useState()
    const [color, setColor] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log([name, model, year, color])
    }

    const onDefaultVal = (e) => {
        e.preventDefault()
        formname.current.value = defaultvalues.name
        formmodel.current.value = defaultvalues.model
        formcolor.current.value = defaultvalues.color
        formyear.current.value = defaultvalues.year
        setName(defaultvalues.name)
        setColor(defaultvalues.color)
        setModel(defaultvalues.model)
        setYear(defaultvalues.year)
    }

    const onReset = (e) => {
        e.preventDefault()
        formname.current.value = null
        formmodel.current.value = null
        formcolor.current.value = null
        formyear.current.value = null
        setName()
        setColor()
        setModel()
        setYear()
    }

    return(
        <>
        <form ref={carDetails}>
          <input ref={formname} type="text" onChange={e => setName(e.target.value)} />
          <input ref={formmodel} type="text" onChange={e => setModel(e.target.value)} />
          <input ref={formyear} type="text" onChange={e => setYear(e.target.value)} />
          <input ref={formcolor} type="text" onChange={e => setColor(e.target.value)} />
          <button onClick={onDefaultVal}>Set default values</button>
          <button onClick={onReset}>Reset value</button>
          <button type="submit" onClick={onSubmit}>submit</button>
        </form>
      </>
    )
}