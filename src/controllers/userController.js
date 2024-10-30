import User from "../models/User.js";
import Event from '../models/Event.js'

class userController {
  async createUser(req, res) {
    const { name, email, password, admin } = req.body;

    try {
      // verifica se todos os campos estão preenchidos
      if ((!name, !email, !password)) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios!" });
      }

      // verifica se já existe usuário cadastrado com um e-mail
      const userExistis = await User.findOne({ where: { email: email } });

      if (userExistis) {
        res.status(409).json({
          message: "Já existe um usuário cadastrado com esse e-mail!",
        });
      } else {
        const newUser = await User.create({ name, email, password, admin });

        // define o usuário como administrador se o e-mail for igual ao definido
        if (newUser.email == "adm@adm") {
          newUser.admin = 1;
          newUser.save();
        }

        res
          .status(201)
          .json({ message: "Usuário criado com sucesso!", userID: newUser.id });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao criar usuário", error: error.message });
    }
  }

  async allUsers(req, res) {
    try {
      const users = await User.findAll();

      res.status(200).json({ users });
    } catch (error) {
      res.status(404).json({ error });
    }
  }
}
export default new userController();

// buscar os eventos que o usuário comprou ingresso.