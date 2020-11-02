import { response } from "express";
import { Lancamentos, Usuario } from "../database/models";

export default {
  create: (req, res, next) => {
    try {
      Lancamentos.create(req.body)
        .then((response) => {
          res.status(201).json({ sucess: true, lancamentos: response });
        })
        .catch((error) => {
          console.log(error)
          res.status(400).json({
            error: error,
            sucess: false,
            message: "Ocorreu um erro enquanto os dados eram inseridos.",
          });
        });
    } catch (error) {
      res.status(500).json({
        error: error,
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });
      next(error);
    }
  },

  update: (req, res, next) => {
    try {
      Lancamentos.findOne({ where: { id: req.params.id } })
        .then((lancamentos) => {
          if (lancamentos) {
            return lancamentos.update(req.body).then((response) => {
              res.status(200).json({ success: true, lancamentos: response });
            });
          } else {
            res.status(404).json({
              success: false,
              message: "O registro solicitado não foi encontrado no sistema.",
            });
          }
        })
        .catch((error) => {
          res.status(400).json({
            error: error,
            success: false,
            message: "Ocorreu um erro enquanto os dados eram atualizados.",
          });
        });
    } catch (error) {
      res.status(500).json({
        error: error,
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });
      next(error);
    }
  },

  index: (req, res, next) => {
    try {
      Lancamentos.findAll({
        attributes: {
          exclude: ["usuario_id"],
        },
        include: [
          {
            model: Usuario,
            as: "usuarios",
          },
        ],
      })
        .then((response) => {
          res.status(200).json({ success: true, lancamentos: response });
        })
        .catch((error) => {
        console.log(error)
          res.status(400).json({
            error: error,
            success: false,
            message: "Ocorreu um erro enquanto os dados eram recuperados.",
          });
        });
    } catch (error) {
      res.status(500).json({
        error: error,
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });

      next(error);
    }
  },

  findById: (req, res, next) => {
    try {
      Lancamentos.findOne({ where: { id: req.params.id } }).then((response) => {
            res.status(200).json({ success: true, lancamentos: response })
        }).catch((error) => {
            res.status(400).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro enquanto o dado era recuperado.'
            })
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            success: false,
            message: 'Ocorreu um erro desconhecido com o sistema.'
        })
        next(error)
    }
},
};
