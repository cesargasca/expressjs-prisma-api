//TODO separate data into layer

import {PrismaClient} from '@prisma/client'

export const prisma = new PrismaClient();

async function getTournamentsService() {
        return prisma.tournament.findMany()
}

async function getSessionsService(){
    return prisma.session.findMany()
}

async function getTeamsService(){
    return prisma.team.findMany()
}

async function getPlayersService(){
    return prisma.player.findMany()
}

async function getTeamPlayersService(){
    return prisma.teamPlayer.findMany()
}

async function getTeamPlayerSessionsService(){
    return prisma.teamPlayerSession.findMany()
}
export {
    getTournamentsService,
    getSessionsService,
    getTeamsService,
    getPlayersService,
    getTeamPlayersService,
    getTeamPlayerSessionsService
}
/*
* getTournamentById
*
* */

/*
*getTeamById
*
* */

/*
* getPlayerById
*
* */


/*
* getTeamByTournamentId
*
* using findMany will return all records in teamplayertournament table that matches
* So this will need some logic to group by team
*
* */

/*
* getPlayerByTeamIdAndTournamentId
* */