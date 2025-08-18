import { Router } from "express";
import {
  getArtistById,
  getArtistProfile,
  getArtistSongs,
  getDiscography,
} from "../controllers/artist.controller.js";

export const artistRouter = Router();

artistRouter.get("/:id/discography", getDiscography);
artistRouter.get("/:id/songs", getArtistSongs);
artistRouter.get("/:id/profile", getArtistProfile)
artistRouter.get("/:id", getArtistById);