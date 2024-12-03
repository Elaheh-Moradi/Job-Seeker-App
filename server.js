console.log("Server is starting...");

import jsonServer from "json-server";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const SECRET_KEY = "your_secret_key";
const TOKEN_EXPIRATION = "1h";

server.use(middlewares);
server.use(bodyParser.json());

// Login endpoint
server.post("/users", (req, res) => {
  const { email, password } = req.body;

  const user = router.db.get("users").find({ email, password }).value();

  if (!user) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: TOKEN_EXPIRATION,
  });

  res.status(200).json({ token });
});

// Middleware to verify JWT for protected routes
server.use((req, res, next) => {
  if (req.path === "/users" || req.method === "GET") {
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    res.status(403).json({ error: "Forbidden" });
  }
});

server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running on http://localhost:4000");
});
