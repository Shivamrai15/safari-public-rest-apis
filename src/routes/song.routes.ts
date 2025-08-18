import { Router } from "express";
import { getSongById, getTrending } from "../controllers/song.controller.js";

export const songRouter = Router();

songRouter.get("/trending", getTrending);
songRouter.get("/:id", getSongById);
