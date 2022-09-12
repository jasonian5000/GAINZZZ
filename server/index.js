import express from "express";
import cors from "cors";
const app = express();
import { userSignUp, userSignIn, userSignOut } from "./supabase_server.js";

const PORT = process.env.PORT || 3001;

app.use(
  cors({ origin: "http://localhost:3000", methods: "GET,POST,PUT,DELETE" })
);
app.use(express.json());

app.post("/sign_up", async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    userSignUp(firstName, lastName, username, email, password);
    res.send("new user created");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

app.post("/sign_in", async (req, res) => {
  const { email, password } = req.body;
  try {
    await userSignIn(email, password);
    res.send("sign in successful");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("sign_out", async (req, res) => {
  try {
    userSignOut();
    res.send("sign out successful");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
