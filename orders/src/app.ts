import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { deleteOrderRouter } from "./routes/delete";
import { indexOrderRouter } from "./routes/index";
import { newOrderRouter } from "./routes/new";
import { showOrderRouter } from "./routes/show";

import { errorHanlder, NotFoundError, currentUser } from "@tstickets123/common";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
)

app.use(currentUser);
app.use(newOrderRouter);
app.use(indexOrderRouter);
app.use(deleteOrderRouter);
app.use(showOrderRouter);
app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHanlder);

export { app };
