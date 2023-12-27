import { Router } from "express";
import { SubjectController } from "./controllers/SubjectControllers";
import { RoomController } from "./controllers/RoomController";

export const routes = Router()

routes.post('/subject', new SubjectController().create)



routes.get('/room', new RoomController().list)

routes.post('/room', new RoomController().create)


routes.post('/room/:idRoom/create', new RoomController().createVideo)

routes.post('/room/:idRoom/subject', new RoomController().roomSubject)