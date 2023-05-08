import { useEffect } from "react"
export default function OnCounterChange (props){
    useEffect(
        () =>{ console.log(`il counter è attualmente a ${props.counter}`)}, [props.counter]
    )
    return(
        <>
        </>
    )
}