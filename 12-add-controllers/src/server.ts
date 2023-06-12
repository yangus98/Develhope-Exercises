import express from "express";
import "express-async-errors"
import morgan from "morgan"
import 'dotenv/config.js'
import { getAll, getOneById, create, updateById, deleteById } from "./controllers/planets.js";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json())

type Planet = {
    id: number;
    name: string;
}

type Planets = Planet[];

let planets = [
    {id:1, name:"Earth"},
    {id:2, name:"Mars"}
];

// get all
app.get('/api/planets', getAll);

//get one by id
app.get('/api/planets/:id', getOneById )

//create
app.post("/api/planets", create );

//update
app.put("/api/planets/:id", updateById )

//delete
app.delete("/api/planets/:id", deleteById )

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

