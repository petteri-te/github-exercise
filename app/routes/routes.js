import { Router } from "../deps.js";
import * as addressController from "./controllers/addressController.js";
//import * as userController from "./controllers/userController.js";

const router = new Router();

router
  .get("/", addressController.listAddresses)
  .post("/", addressController.addAddress)
  .post("/delete/:id", addressController.deleteAddress);

router.get("/search", addressController.searchAddresses);

// router.post("/register", userController.createUser);

export { router };
