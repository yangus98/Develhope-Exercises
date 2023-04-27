export default function Welcome(props){
  let strongName = <strong>{props.name}</strong>;

  return <div>
           <p>Welcome {strongName} !</p>
          </div>
}
