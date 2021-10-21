import { Router } from "express";
import { AuthenticateUsersController } from "./controllers/AuthenticateUsersController";
import { CreateMessageController } from "./controllers/CreateMessagesController";
import { GetLastThreeMessagesController } from "./controllers/GetLastThreeMessagesController";
import { ProfileUsersController } from "./controllers/ProfileUsersController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUsersController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last-three", new GetLastThreeMessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUsersController().handle);

export { router }