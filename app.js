import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subsciptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

//inbuilt middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//seeting the routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subsciptionRouter);

//custome middleware
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("welcome to the subsciption tracker api");
});

app.listen(PORT, async () => {
  console.log(`subsciption tracker api is running on http://localhost:${PORT}`);

  await connectToDatabase();
});

export default app;
