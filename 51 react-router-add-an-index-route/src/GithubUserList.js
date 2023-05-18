import GithubUser from "./GithubUser"
import { useState } from "react"
import { Outlet } from "react-router-dom";

export default function GithubUserList(){

    const [name, setName] = useState('');
    const [items, setItems] = useState([]);
    const handleAdd = () => {
        setItems([...items, name]);
    };

    return(
        <div>
        <input onChange={(e) => setName(e.target.value)}/>
          <button onClick={handleAdd}>add</button>
          {items.map((item, index) => {return <li index={index}><GithubUser username={item}/></li>})}
          <div>
            <Outlet />
          </div>
        </div>
    )
}