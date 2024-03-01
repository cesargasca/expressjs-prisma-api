import express from "express";
import { validateAccessToken } from "../middleware/auth0.middleware";
import { Prisma, PrismaClient } from '@prisma/client'

import {
  checkRequiredPermissions,
  validateAccessToken,
} from "../middleware/auth0.middleware";
import { AdminMessagesPermissions } from "./messages.permissions";
import {
  getAdminMessage,
  getProtectedMessage,
  getPublicMessage,
} from "./messages.service";

export const prisma = new PrismaClient();
export const messagesRouter = express.Router();

messagesRouter.get("/public", (req, res) => {
  const message = getPublicMessage();

  res.status(200).json(message);
});

messagesRouter.get("/protected", validateAccessToken,async (req, res) => {
  const message = getProtectedMessage();
  const players = await prisma.player.findMany()
  res.status(200).json(players);
});

messagesRouter.get("/admin", validateAccessToken,(req, res) => {
  const message = getAdminMessage();

    res.status(200).json(message);
  }
);
