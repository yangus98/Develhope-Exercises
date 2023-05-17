import { useEffect, useRef } from "react"

export default function CarForm ({initialData}) {

    const carDetails = useRef()
    const formName = useRef()
    const formModel = useRef()
    const formYear = useRef()
    const formColor = useRef()

    const onSubmit = (e) => {
      e.preventDefault()
      console.log([formName.current.value, formModel.current.value, formYear.current.value, formColor.current.value])
    }

    useEffect(() => {carDetails.current.reset();}, [initialData])

    return(
        <>
        <form ref={carDetails}>
          <input ref={formName} name="name" type="text" onChange={e => (e.target.value)} defaultValue={initialData.name}/>
          <input ref={formModel} name="model" type="text" onChange={e => (e.target.value)} defaultValue={initialData.model}/>
          <input ref={formYear} name="year" type="text" onChange={e => (e.target.value)} defaultValue={initialData.year}/>
          <input ref={formColor} name="color" type="text" onChange={e => (e.target.value)} defaultValue={initialData.color}/>
          <button type="submit" onClick={onSubmit}>submit</button>
        </form>
      </>
    )
}