import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static listarLivros = async (req, res) => {
    try {
      const livrosResultado = await livro.find()
        .populate("autor")
        .exec();
      res.status(200).json(livrosResultado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const livroResultados = await livro.findById(id)
        .populate("autor", "nome")
        .exec();
      res.status(200).json(livroResultados);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
    }
  }

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      const livroResultado = await livro.save();
      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "livro atualizado com sucesso!" });
    } catch (erro) {
      res.status(500).send({ message: `${erro.message} - falha na atualização` });
    }
  }

  static excluirLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).send({ message: "livro excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }

  static listarLivrosPorEditora = async (req, res) => {
    try {
      const editora = req.params.editora;
      const livrosResultado = await livro.find({ editora: editora });
      res.status(200).send(livrosResultado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
}

export default LivroController;