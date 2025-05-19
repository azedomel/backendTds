import { Router, urlencoded } from "express";

const routes = Router()

//rota de teste
routes.get("/", (req,res) => {
    return res.send('rota de teste')
})

//rota que retorna uma lista nomeada "items"

routes.get("/funcionarios", (req,res) => {
    return res.json({
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

routes.get("/foto", (req,res) => {
    return res.json({
        items: [
            {
                foto: 'https://http2.mlstatic.com/D_NQ_NP_738364-MLB49948706188_052022-O-troia-16-brad-pitt-aquiles-boneco.webp',
                nome: "Aquiles",
                idade: 1900
            }
        ]
    })
})


export default routes