import { useRef } from "react"

export default function CarForm ({initialData}) {

    const carDetails = useRef(null)
    const formName = useRef(null)
    const formModel = useRef(null)
    const formYear = useRef(null)
    const formColor = useRef(null)

    const onSubmit = (e) => {
      e.preventDefault()
      console.log([formName.current.value, formModel.current.value, formYear.current.value, formColor.current.value])
    }

    

    return(
        <>
        <form ref={carDetails} onFocus={e => (e.target.value = "")}>
          <input ref={formName} name="name" type="text" onChange={e => (e.target.value)} defaultValue={initialData.name}/>
          <input ref={formModel} name="model" type="text" onChange={e => (e.target.value)} defaultValue={initialData.model}/>
          <input ref={formYear} name="year" type="text" onChange={e => (e.target.value)} defaultValue={initialData.year}/>
          <input ref={formColor} name="color" type="text" onChange={e => (e.target.value)} defaultValue={initialData.color}/>
          <button type="submit" onClick={onSubmit}>submit</button>
        </form>
      </>
    )
}