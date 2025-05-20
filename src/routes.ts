import { Router, Request, Response } from "express";
import userController from "./controllers/user";

const routes = Router()

//rota de teste
routes.get("/", (req: Request, res: Response) : any => {
    return res.send('rota de teste')
})

//rota que retorna uma lista nomeada "items"

routes.get("/funcionarios", (req: Request, _res: Response) : any => {
    return Response.json({
        items: [
            {
                id: "1",
                nome: "kevilin",
                idade: 18,
                custoPorHora: 120.0,
                temLicenca: false
            },
            {
                id: "2",
                nome: "Adulto",
                idade: 17,
                custoPorHora: 100.0,
                temLicenca: false
            },
            {
                id: "3",
                nome: "byte coder",
                idade: 20,
                custoPorHora: 150.0,
                temLicenca: false
            },

        ]
    })
})

routes.post("/users", (req: Request, res:Response) : any => userController.create(req,res))

export default routes