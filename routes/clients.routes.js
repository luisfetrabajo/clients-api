import express from "express";
import * as controller from "../controllers/clientsController.js";
const router = express.Router();
// Source - https://stackoverflow.com/a/57151203
// Posted by Aritra Chakraborty
// Retrieved 2026-07-21, License - CC BY-SA 4.0

/* const newUser = new User({
   nombre: req.body.nombre,
   ciudad: req.body.ciudad,
   facturacion: req.body.password
}); */

router.get("/", controller.getClients);
router.post("/new", controller.createClient);
router.put("/update/:_id", controller.updateClient);
router.delete("/delete/:_id", controller.deleteClient);
export default router;
