import {createRoot} from "react-dom/client"
import Counter from "./Counter"

const root = createRoot(document.getElementById("root"));
root.render(<Counter initialValue={100} incrementInterval={1000} incrementAmount ={2}/>);