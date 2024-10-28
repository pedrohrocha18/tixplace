import User from "../models/User.js";
import bcrypt from "bcrypt";

class authController {
  async authUser(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: "E-mail ou senha incorretos." });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "E-mail ou senha incorretos." });
      }

      res.status(200).json({ message: "Login efetuado!", userId: user.id });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao fazer login", error: error.message });
    }
  }
}

export default new authController();
