import User from "../models/User.js";

class userController {
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;

      const userExistis = User.findOne({ where: { email: email } });

      if (userExistis) {
        res
          .status(409)
          .json({ message: "Já existe um usuário cadastrado com esse e-mail!" });
      } else {
        const newUser = await User.create({ name, email, password });
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
}

export default new userController();
