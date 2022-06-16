import { Router } from "express";
import { deleteFile, getFiles } from "./handlers/fileHandler";

const routes = Router();

routes.get("/", (_req, res) => {
  return res.json({ ok: true });
});
routes.post("/files", getFiles);
routes.delete("/files", deleteFile);

export default routes;
