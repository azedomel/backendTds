import  routes  from "./routes";
import cors from 'cors'
import express from 'express'

//iniciar o express
const app = express();

//definir as regras do servidor
//meio de comunicação json

app.use(express.json());

//definir comos os dados serão interpretados
app.use(express.urlencoded({extended: true}));

//definir o cors - é um middleware para aplicações node.js que permite ou estringe requisições entre origens diferentes
app.use(cors());

//definir as rotas
app.use(routes)

export default app;