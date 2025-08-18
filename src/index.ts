import express from "express";
import cors from "cors";
import { albumRouter, artistRouter, songRouter } from "./routes/index.js";
import { redis } from "./lib/redis.js";
import { cache } from "./middlewares/cache.middleware.js";

const PORT = process.env.PORT || 3000;

await redis.connect();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cache);

app.use("/api/v2/album", albumRouter);
app.use("/api/v2/song", songRouter);
app.use("/api/v2/artist", artistRouter);

app.get("/api/v2/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.listen(PORT, () => {
  console.log(`Backend Public Server is running on port ${PORT}`);
});
