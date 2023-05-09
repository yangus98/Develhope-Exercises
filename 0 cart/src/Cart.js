export default function Cart(props){
    
    return(
        <>
        <h2>
            Carrello
        </h2>
        <ul>
            {props.arr.map((e, index) => {return <li key={index}>{e.name} {e.price}</li>})}
        </ul>
        <p>TOTALE: {Math.round(props.sum)}</p>
        </>
    )
}