import { Router } from "express";

import OngController from "./controllers/OngController";
import IncidentController from "./controllers/IncidentController";

const routes = new Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

export default routes;
