import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livro.find()
        .populate("autor")
        .exec();
      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultados = await livro.findById(id)
        .populate("autor", "nome")
        .exec();
      res.status(200).json(livroResultados);
    } catch (erro) {
      next(erro);
    }
  }

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      const livroResultado = await livro.save();
      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  }

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "livro atualizado com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  }

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).send({ message: "livro excluído com sucesso" });
    } catch (erro) {
      next(erro);
    }
  }

  static listarLivrosPorEditora = async (req, res, next) => {
    try {
      const editora = req.params.editora;
      const livrosResultado = await livro.find({ editora: editora });
      res.status(200).send(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  }
}

export default LivroController;