import { Router } from "../deps.js";
import * as addressController from "./controllers/addressController.js";


const router = new Router();

router.get("/", addressController.listAddresses)
.post("/", addressController.addAddress)
.post("/delete/:id", addressController.deleteAddress);


export {
    router
}