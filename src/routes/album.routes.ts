import { Router } from "express";
import {
  getAlbumById,
  getRecommendedAlbums,
  getSimilarAlbums,
} from "../controllers/album.controller.js";

export const albumRouter = Router();

albumRouter.get("/similar", getSimilarAlbums);
albumRouter.get("/recommended", getRecommendedAlbums);
albumRouter.get("/:id", getAlbumById);
