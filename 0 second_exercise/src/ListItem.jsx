

export default function ListItem(props) {

    function removeTodo(){
        const newArr = [...props.arr];
        newArr.splice(props.index, 1);
        props.setTodo(newArr)
    }

    return (<>
            <li>{props.item}</li>
            <button onClick={removeTodo}>Clicca</button>
        </>)
}