import {Player, PrismaClient, TeamPlayer} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Crear el torneo "Superbowl" en el bolerama "Insurgentes"
    const tournament = await prisma.tournament.create({
        data: {
            name: "Superbowl",
            bowling: {
                create: {
                    name: "Insurgentes",
                },
            },
        },
    });

    // Crear las lanes del 17 al 34
    const lanes = [];
    for (let i = 17; i <= 34; i++) {
        lanes.push(
            await prisma.lane.create({
                data: {
                    id: i,
                    laneId_opponent: i % 2 === 0 ? i - 1 : i + 1, // Configurar el enfrentamiento entre las lanes
                },
            })
        );
    }

    // Crear el equipo "Tuvo miedo" en el torneo "Superbowl"
    const teamTuvoMiedo = await prisma.team.create({
        data: {
            name: "Tuvo miedo",
            tournamentId: tournament.id,
        },
    });


    // Crear jugadores para "Tuvo miedo"

    const playerNames = ["Cesar", "Isaac", "Roberto", "Fernando"];
    const playersTuvoMiedo: Player[] = [];

    for (const name of playerNames) {
        const player = await prisma.player.create({
            data: {
                name: name,
            },
        });
        playersTuvoMiedo.push(player);
    }


    // Asociar jugadores al equipo "Tuvo miedo"
    await prisma.teamPlayer.createMany({
        data: playersTuvoMiedo.map((player: Player, index:number) => ({
            playerId: player.id,
            teamId: teamTuvoMiedo.id,
            isReplacement: false,
        })),
    });

    // Crear equipo "Tequilers"
    const teamTequilers = await prisma.team.create({
        data: {
            name: "Tequilers",
            tournamentId: tournament.id,
        },
    });

    // Crear jugadores para "Tequilers"

    const playerNamesTequilers = ["Memo", "Edgar", "Arturo", "Viri"];
    const playersTequilers: Player[] = [];

    for (const name of playerNamesTequilers) {
        const player = await prisma.player.create({
            data: {
                name: name,
            },
        });
        playersTequilers.push(player);
    }

    // Asociar jugadores al equipo "Tequilers", indicando que "Arturo" es un reemplazo
    await prisma.teamPlayer.createMany({
        data: playersTequilers.map((player: Player, index:number) => ({
            playerId: player.id,
            teamId: teamTequilers.id,
            isReplacement: index === 2, // "Arturo" es el tercer jugador en la lista (índice 2)
        })),
    });

    // Crear una sesión para el torneo "Superbowl" el 19 de marzo de 2024
    const session = await prisma.session.create({
        data: {
            date: new Date(2024, 2, 19), // Mes 2 representa marzo (enero es 0, febrero es 1, etc.)
            tournamentId: tournament.id,
        },
    });

    // Crear sesiones de jugadores para "Tuvo miedo"
    await prisma.teamPlayerSession.createMany({
        data: [
            {
                teamPlayerId: 1, // "Cesar"
                sessionId: session.id,
                line1: getRandomInt(150, 230),
                line2: getRandomInt(150, 230),
                line3: getRandomInt(150, 230),
                assistance: 1,
                payment: 1,
                handicap: 40,
                laneId: 17,
            },
            {
                teamPlayerId: 2, // "Isaac"
                sessionId: session.id,
                line1: getRandomInt(150, 230),
                line2: getRandomInt(150, 230),
                line3: getRandomInt(150, 230),
                assistance: 1,
                payment: 1,
                handicap: 38,
                laneId: 19,
            },
            {
                teamPlayerId: 3, // "Roberto"
                sessionId: session.id,
                line1: getRandomInt(150, 230),
                line2: getRandomInt(150, 230),
                line3: getRandomInt(150, 230),
                assistance: 1,
                payment: 1,
                handicap: 4,
                laneId: 21,
            },
            {
                teamPlayerId: 4, // "Fernando"
                sessionId: session.id,
                line1: getRandomInt(150, 230),
                line2: getRandomInt(150, 230),
                line3: getRandomInt(150, 230),
                assistance: 1,
                payment: 1,
                handicap: 14,
                laneId: 23,
            },
        ],
    });

// Crear sesiones de jugadores para "Tequilers
    // Crear sesiones de jugadores para "Tequilers"
    await prisma.teamPlayerSession.createMany({
        data: [
            {
                teamPlayerId: 5, // "Guillermo"
                sessionId: session.id,
                line1: getRandomInt(150, 230),
                line2: getRandomInt(150, 230),
                line3: getRandomInt(150, 230),
                assistance: 1,
                payment: 1,
                handicap: 0,
                laneId: 18,
            },
            {
                teamPlayerId: 6, // "Edgar"
                sessionId: session.id,
                line1: getRandomInt(150, 230),
                line2: getRandomInt(150, 230),
                line3: getRandomInt(150, 230),
                assistance: 1,
                payment: 1,
                handicap: 0,
                laneId: 20,
            },
            {
                teamPlayerId: 7, // "Arturo"
                sessionId: session.id,
                line1: getRandomInt(150, 230),
                line2: getRandomInt(150, 230),
                line3: getRandomInt(150, 230),
                assistance: 1,
                payment: 1,
                handicap: 0,
                laneId: 22,
            },
            {
                teamPlayerId: 8, // "Viri"
                sessionId: session.id,
                line1: getRandomInt(150, 230),
                line2: getRandomInt(150, 230),
                line3: getRandomInt(150, 230),
                assistance: 1,
                payment: 1,
                handicap: 0,
                laneId: 24,
            },
        ],
    });

    console.log("Datos de semilla insertados correctamente.");
}

main()
    .catch((error) => {
        console.error("Error al insertar datos de semilla:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

// Función para generar un número entero aleatorio entre un rango dado
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
