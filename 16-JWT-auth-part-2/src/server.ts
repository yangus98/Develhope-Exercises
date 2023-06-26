import express from "express";
import "express-async-errors"
import morgan from "morgan"
import 'dotenv/config.js'
import { getAll, getOneById, create, updateById, deleteById, createImage } from "./controllers/planets.js";
import { logIn, signUp } from "./controllers/users.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, "./uploads")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
})
const upload = multer({storage})

const app = express();
const port = 3000;

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

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

app.post("/api/planets/:id/image", upload.single("image"), createImage)

app.post("/api/users/login", logIn);
app.post("/api/users/signup", signUp);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

