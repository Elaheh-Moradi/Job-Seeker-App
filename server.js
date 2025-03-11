console.log("Server is starting...");

import jsonServer from "json-server";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const SECRET_KEY = "your_secret_key";
const TOKEN_EXPIRATION = "23h";

server.use(middlewares);
server.use(bodyParser.json());


// Define registration endpoint first
server.post("/register", (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ error: "وارد کردن ایمیل، رمزعبور، نام و نام خانوادگی ضروری است." });
  }
  
  const existingUser = router.db.get("users").find({ email }).value();
  if (existingUser) {
    return res.status(409).json({ error: "این کاربر قبلا ثبت شده است." });
  }

  const newUser = {
    id: Date.now(),
    email,
    password,
    name,
  };

  router.db.get("users").push(newUser).write();

    // Generate a token that includes the user's id, email, and username (name)
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, username: newUser.name },
      SECRET_KEY,
      { expiresIn: TOKEN_EXPIRATION }
    );
  
    res.status(201).json({ token, user: newUser });
});

// Then define your login endpoint
server.post("/users", (req, res) => {
  const { email, password } = req.body;
  const user = router.db.get("users").find({ email, password }).value();

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, username: user.name },
    SECRET_KEY,
    { expiresIn: TOKEN_EXPIRATION }
  );
  res.status(200).json({ token });
});

// Then apply the JWT verification middleware for all other routes:
server.use((req, res, next) => {
  if (
    req.method === "GET" ||
    req.path === "/users" ||
    req.path === "/register"
  ) {
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "دسترسی غیر مجاز است." });
  }
  const token = authHeader.split(" ")[1];
  try {
    jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    res.status(403).json({ error: "ورود این کاربر مجاز نیست!" });
  }
});

server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running on http://localhost:4000");
});
