import ListItem from "./ListItem"

function List(props){

    return <ul>
            {props.arr.map((item, index) => {
                return (
                    <ListItem item = {item.title} setTodo = {props.setTodo} arr= {props.arr} index = {index} key={index}/>
                )
            })}
            </ul>
}

export default List