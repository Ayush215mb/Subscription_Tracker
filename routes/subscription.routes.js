import { Router } from "express";
import { authorize } from "../middleware/auth.middleware.js";
import { createSubscription } from "../controllers/subscription.controller.js";

const subsciptionRouter = Router();

subsciptionRouter.get("/", (req, res) => {
  res.send({ title: "GEt all subscriptions" });
});

subsciptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET subscription details" });
});

subsciptionRouter.post("/", authorize, createSubscription);

subsciptionRouter.put("/:id", (req, res) => {
  res.send({ title: "update subscription" });
});

subsciptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete subscription" });
});

subsciptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET all user subscriptions" });
});

subsciptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "cancel subscription" });
});

subsciptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subsciptionRouter;
