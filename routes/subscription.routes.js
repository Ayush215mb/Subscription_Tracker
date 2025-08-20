import { Router } from "express";

const subsciptionRouter = Router();

subsciptionRouter.get("/", (req, res) => {
  res.send({ title: "GEt all subscriptions" });
});

subsciptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET subscription details" });
});

subsciptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE subscription" });
});

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
