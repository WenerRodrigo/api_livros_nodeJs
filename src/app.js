import express from 'express';
import conectDataBase from './config/dbConnect.js';
import routes from './routes/index.js';


const conexao = await conectDataBase();

conexao.on("error", err => console.log("Erro na conexão com o banco de dados", err));

conexao.once("open", () => console.log("Conectado com sucesso!"));

const app = express();
routes(app);


// Deletando dados pelo ID..
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send({ mensagem: "Livro deletado com sucesso" });
});




export default app;



