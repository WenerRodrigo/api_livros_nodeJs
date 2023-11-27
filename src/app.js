import express from "express";
import conectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

const conexao = await conectDataBase();

conexao.on("error", err => console.log("Erro na conexão com o banco de dados", err));

conexao.once("open", () => console.log("Conectado com sucesso!"));

const app = express();
app.use(express.json());
routes(app);

app.use(manipuladorDeErros);


export default app;



