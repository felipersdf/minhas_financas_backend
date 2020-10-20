import jwt from "jsonwebtoken";
import { Usuario, Setor, UsuarioPapel } from "../database/models";

async function checkToken(token) {
  try {
    const { id } = jwt.decode(token);
    return await Usuario.findOne({
      where: { id },
    }).then((response) => {
      if (response) {
        const { id, usuario } = response;
        const tokenKey = process.env.TOKEN_KEY || "tokenKey";
        const token = jwt.sign({ id, username: usuario }, tokenKey, {
          expiresIn: "1d",
        });
        return { token };
      } else {
        return false;
      }
    });
  } catch (error) {
    return false;
  }
}

export default {
  encode: (id, username) => {
    const tokenKey = process.env.TOKEN_KEY || "tokenKey";
    return jwt.sign({ id, username }, tokenKey, { expiresIn: "1d" });
  },

  verifyToken: async (token) => await checkToken(token),

  decode: async (token) => {
    try {
      const tokenKey = process.env.TOKEN_KEY || "tokenKey";
      const { id } = jwt.verify(token, tokenKey);
      return await Usuario.findOne({
        where: { id },
      });
    } catch (error) {
      return await checkToken(token);
    }
  },
};
