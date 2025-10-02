import { Router } from "express";
import { getAIShuffledSongs, getSongById, getTrending, getRelatedSongs } from "../controllers/song.controller.js";

export const songRouter = Router();

songRouter.get("/trending", getTrending);
songRouter.post("/ai-shuffled", getAIShuffledSongs);
songRouter.get("/:id/related", getRelatedSongs);
songRouter.get("/:id", getSongById);
