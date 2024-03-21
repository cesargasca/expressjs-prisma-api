//TODO implement express responses will be handled
import {Request,Response} from "express";
import {
    getPlayersService,
    getSessionsService, getTeamPlayerSessionsService,
    getTeamPlayersService,
    getTeamsService,
    getTournamentsService
} from "../service/messages.service";

const getTournaments = async (req:Request,res:Response)=> {
    try{
        const tournaments =  await getTournamentsService()
        res.status(200).json(tournaments);
    }catch (error){
        res.status(500).json({ error: "Internal server error" });
    }
}

const getSessions = async (req:Request,res:Response)=> {
    try{
        const sessions =  await getSessionsService()
        res.status(200).json(sessions);
    }catch (error){
        res.status(500).json({ error: "Internal server error" });
    }
}

const getPlayers = async (req:Request,res:Response)=> {
    try{
        const players =  await getPlayersService()
        res.status(200).json(players);
    }catch (error){
        res.status(500).json({ error: "Internal server error" });
    }
}

const getTeams = async (req:Request,res:Response)=> {
    try{
        const teams =  await getTeamsService()
        res.status(200).json(teams);
    }catch (error){
        res.status(500).json({ error: "Internal server error" });
    }
}
const getTeamPlayers = async (req:Request,res:Response)=> {
    try{
        const teamPlayers =  await getTeamPlayersService()
        res.status(200).json(teamPlayers);
    }catch (error){
        res.status(500).json({ error: "Internal server error" });
    }
}

const getTeamPlayerSessions = async (req:Request,res:Response)=> {
    try{
        const teamPlayerSessions =  await getTeamPlayerSessionsService()
        res.status(200).json(teamPlayerSessions);
    }catch (error){
        res.status(500).json({ error: "Internal server error" });
    }
}



export {
    getTournaments,
    getSessions,
    getTeams,
    getTeamPlayers,
    getTeamPlayerSessions,
    getPlayers
}