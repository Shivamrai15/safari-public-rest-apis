import type { Request, Response } from "express";
import type { Album, Song } from "../../generated/prisma/index.js";
import { db } from "../lib/db.js";

const BATCH = 10;

export async function getTrending(req: Request, res: Response) {
  try {
    const { cursor } = req.query;

    let songs: (Song & { album: Album })[] = [];

    if (cursor) {
      songs = await db.song.findMany({
        where: {
          view: {
            some: {},
          },
        },
        include: {
          album: true,
        },
        orderBy: [
          {
            view: {
              _count: "desc",
            },
          },
          {
            name: "asc",
          },
        ],
        skip: 1,
        cursor: {
          id: cursor as string,
        },
        take: BATCH,
      });
    } else {
      songs = await db.song.findMany({
        where: {
          view: {
            some: {},
          },
        },
        include: {
          album: true,
        },
        orderBy: [
          {
            view: {
              _count: "desc",
            },
          },
          {
            name: "asc",
          },
        ],
        take: BATCH,
      });
    }

    let nextCursor = null;

    if (songs.length === BATCH) {
      nextCursor = songs[BATCH - 1]?.id;
    }

    return res.status(200).json({
      items: songs,
      nextCursor,
    });
  } catch (error) {
    console.error("GET TRENDING ERROR:", error);
    res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: {} });
  }
}

export async function getSongById(req: Request, res: Response) {
  try {
    const songId = req.params.id;
    if (!songId) {
      return res
        .status(400)
        .json({ status: false, message: "Bad Request", data: {} });
    }

    const song = await db.song.findUnique({
      where: {
        id: songId,
      },
      include: {
        album: true,
        artists: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        _count: {
          select: {
            view: true,
          },
        },
      },
    });

    if (!song) {
      return res
        .status(404)
        .json({ status: false, message: "Song Not Found", data: {} });
    }

    return res
      .status(200)
      .json({ status: true, message: "Success", data: song });
  } catch (error) {
    console.error("GET SONG BY ID ERROR:", error);
    res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: {} });
  }
}
