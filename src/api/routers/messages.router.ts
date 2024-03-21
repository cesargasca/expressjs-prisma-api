import express from "express";

import {
  validateAccessToken,
} from "../../middleware/auth0.middleware";
import {getPlayers, getSessions, getTeamPlayers, getTeams, getTournaments} from "../controllers/message.controllers";
//import { AdminMessagesPermissions } from "./messages.permissions";



export const messagesRouter = express.Router();


// GET all tournaments
messagesRouter.get("/tournaments",validateAccessToken, getTournaments);
messagesRouter.get("/sessions", validateAccessToken,getSessions);
messagesRouter.get("/teams",validateAccessToken, getTeams);
messagesRouter.get("/players",validateAccessToken,getPlayers);
messagesRouter.get("/team-players",validateAccessToken, getTeamPlayers);
messagesRouter.get("/team-player-sessions",validateAccessToken, getTeamPlayers);

