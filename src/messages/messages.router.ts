import express from "express";
import { Prisma, PrismaClient } from '@prisma/client'

import {
  validateAccessToken,
} from "../middleware/auth0.middleware";
//import { AdminMessagesPermissions } from "./messages.permissions";



export const messagesRouter = express.Router();
export const prisma = new PrismaClient();

// GET all tournaments
messagesRouter.get("/tournaments",validateAccessToken, async (req, res) => {
    try {
        const tournaments = await prisma.tournament.findMany();
        res.json(tournaments);
    } catch (error) {
        console.error("Error retrieving tournaments:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET all sessions
messagesRouter.get("/sessions", validateAccessToken,async (req, res) => {
    try {
        const sessions = await prisma.session.findMany();
        res.json(sessions);
    } catch (error) {
        console.error("Error retrieving sessions:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET all teams
messagesRouter.get("/teams",validateAccessToken, async (req, res) => {
    try {
        const teams = await prisma.team.findMany();
        res.json(teams);
    } catch (error) {
        console.error("Error retrieving teams:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET all players
messagesRouter.get("/players",validateAccessToken, async (req, res) => {
    try {
        const players = await prisma.player.findMany();
        res.json(players);
    } catch (error) {
        console.error("Error retrieving players:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET all team players
messagesRouter.get("/team-players",validateAccessToken, async (req, res) => {
    try {
        const teamPlayers = await prisma.teamPlayer.findMany(
            {
                include: {
                    player: true,
                    team:true
                }
            }
        );
        res.json(teamPlayers);
    } catch (error) {
        console.error("Error retrieving team players:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET all team player sessions
messagesRouter.get("/team-player-sessions",validateAccessToken, async (req, res) => {
    try {
        const teamPlayerSessions = await prisma.teamPlayerSession.findMany();
        res.json(teamPlayerSessions);
    } catch (error) {
        console.error("Error retrieving team player sessions:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

