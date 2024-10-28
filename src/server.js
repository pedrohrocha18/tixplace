import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
