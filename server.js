// import http from "http";
import "dotenv/config.js"; //Tem que passar o .JS
import app from "./src/app.js";

const PORT = 3000;


// Conectando ao app (EXPRESS)..
app.listen(PORT, () => {
  console.log('Servidor rodando');
})
