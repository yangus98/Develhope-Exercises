import {Request, Response} from "express"
import Joi from "joi";

type Planet = {
    id: number;
    name: string;
}

type Planets = Planet[];

let planets: Planets = [
    {id:1, name:"Earth"},
    {id:2, name:"Mars"}
];

const getAll = (req: Request, res: Response) => {
    res.status(200).json(planets)
}

const getOneById = (req: Request, res: Response) => {
    const {id} = req.params;
    const planet = planets.find(p => p.id === Number(id))

    res.status(200).json(planet);
  }

const planetSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
})

const create = (req: Request, res: Response) => {
    const {id, name} = req.body
    const newPlanet: Planet = {id, name}
    const validatedNewPlanet = planetSchema.validate(newPlanet)

    if (validatedNewPlanet.error) {
        return res.status(400).json({ msg: validatedNewPlanet.error.details[0].message })
    } else {
        planets = [...planets, newPlanet];
        console.log(planets);

        res.status(201).json({msg: "The planet was created."})
    }
  }

const updateById = (req: Request, res: Response) =>{
    const {id} = req.params
    const {name} = req.body
    planets = planets.map(p => p.id === Number(id) ? ({...p, name}): p)
  
    console.log(planets);
  
    res.status(200).json({msg: "The planet was updated"})
  }

const deleteById = (req: Request, res: Response) =>{
    const {id} = req.params;
    planets = planets.filter(p => p.id !== Number(id))
  
    res.status(200).json({ msg: "The planet was deleted"});
  }

export { getAll, getOneById, create, updateById, deleteById };