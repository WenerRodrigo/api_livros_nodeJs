import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res, next) {
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado)
    } catch (erro) {
      next(erro);
    }
  }

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorResultado = await autor.findById(id);

      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        res.status(404).send({ message: 'falha na requisição' });
      }
    } catch (erro) {
      next(erro);
    }
  }

  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);
      const autorResultado = await autor.save();
      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }

  }

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  }

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(200).json({ message: "autor excluído com sucesso" });
    } catch (erro) {
      next(erro);
    }
  }
}

export default AutorController;