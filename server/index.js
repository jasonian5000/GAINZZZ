import express from "express";
const app = express();
import { userSignUp } from "./supabase.js"

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post("/sign_up", async (req, res) => {
  console.log(req.body)
  console.log(req.headers)
  const { firstName, lastName, username, email, password } = req.body;
  console.log(password);
  try {
    userSignUp(firstName, lastName, username, email, password);
    res.send("user created")
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
