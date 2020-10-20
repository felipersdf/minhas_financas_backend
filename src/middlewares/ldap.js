import ldap from "ldapjs";
import { Usuario, Setor, UsuarioPapel } from "../database/models";

const getUser = (req, res, next) => {
  Usuario.findOne({
    where: { usuario: req.body.usuario },
  })
    .then((usuario) => {
      if (usuario === undefined) {
        return res
          .status(400)
          .send({ message: "O usuário não está cadastrado no sistema." });
      } else {
        req.body.usuario = usuario;

        next();
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).send({
        error: error,
        success: false,
        message: "Ocorreu um erro enquanto os dados eram recuperados.",
      });
    });
};

export { getUser };
