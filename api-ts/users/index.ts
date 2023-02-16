import { Router } from "express";
const router = Router();
type User = {
  id: string;
  name: string;
};
router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.post("/", (req, res) => {
  const { name } = req.body as User;
  console.log(name);

  res.send("ok");
});

export default router;
