import express from "express";
import conectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";


const conexao = await conectDataBase();

conexao.on("error", err => console.log("Erro na conexão com o banco de dados", err));

conexao.once("open", () => console.log("Conectado com sucesso!"));

const app = express();
routes(app);


export default app;



