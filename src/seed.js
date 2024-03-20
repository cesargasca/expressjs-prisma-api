"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var tournament, lanes, i, _a, _b, teamTuvoMiedo, playerNames, playersTuvoMiedo, _i, playerNames_1, name_1, player, teamTequilers, playerNamesTequilers, playersTequilers, _c, playerNamesTequilers_1, name_2, player, session;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, prisma.tournament.create({
                        data: {
                            name: "Superbowl",
                            bowling: {
                                create: {
                                    name: "Insurgentes"
                                }
                            }
                        }
                    })];
                case 1:
                    tournament = _d.sent();
                    lanes = [];
                    i = 17;
                    _d.label = 2;
                case 2:
                    if (!(i <= 34)) return [3 /*break*/, 5];
                    _b = (_a = lanes).push;
                    return [4 /*yield*/, prisma.lane.create({
                            data: {
                                id: i,
                                laneId_opponent: i % 2 === 0 ? i - 1 : i + 1
                            }
                        })];
                case 3:
                    _b.apply(_a, [_d.sent()]);
                    _d.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, prisma.team.create({
                        data: {
                            name: "Tuvo miedo",
                            tournamentId: tournament.id
                        }
                    })];
                case 6:
                    teamTuvoMiedo = _d.sent();
                    playerNames = ["Cesar", "Isaac", "Roberto", "Fernando"];
                    playersTuvoMiedo = [];
                    _i = 0, playerNames_1 = playerNames;
                    _d.label = 7;
                case 7:
                    if (!(_i < playerNames_1.length)) return [3 /*break*/, 10];
                    name_1 = playerNames_1[_i];
                    return [4 /*yield*/, prisma.player.create({
                            data: {
                                name: name_1
                            }
                        })];
                case 8:
                    player = _d.sent();
                    playersTuvoMiedo.push(player);
                    _d.label = 9;
                case 9:
                    _i++;
                    return [3 /*break*/, 7];
                case 10: 
                // Asociar jugadores al equipo "Tuvo miedo"
                return [4 /*yield*/, prisma.teamPlayer.createMany({
                        data: playersTuvoMiedo.map(function (player, index) { return ({
                            playerId: player.id,
                            teamId: teamTuvoMiedo.id,
                            isReplacement: false
                        }); })
                    })];
                case 11:
                    // Asociar jugadores al equipo "Tuvo miedo"
                    _d.sent();
                    return [4 /*yield*/, prisma.team.create({
                            data: {
                                name: "Tequilers",
                                tournamentId: tournament.id
                            }
                        })];
                case 12:
                    teamTequilers = _d.sent();
                    playerNamesTequilers = ["Cesar", "Isaac", "Roberto", "Fernando"];
                    playersTequilers = [];
                    _c = 0, playerNamesTequilers_1 = playerNamesTequilers;
                    _d.label = 13;
                case 13:
                    if (!(_c < playerNamesTequilers_1.length)) return [3 /*break*/, 16];
                    name_2 = playerNamesTequilers_1[_c];
                    return [4 /*yield*/, prisma.player.create({
                            data: {
                                name: name_2
                            }
                        })];
                case 14:
                    player = _d.sent();
                    playersTequilers.push(player);
                    _d.label = 15;
                case 15:
                    _c++;
                    return [3 /*break*/, 13];
                case 16: 
                // Asociar jugadores al equipo "Tequilers", indicando que "Arturo" es un reemplazo
                return [4 /*yield*/, prisma.teamPlayer.createMany({
                        data: playersTequilers.map(function (player, index) { return ({
                            playerId: player.id,
                            teamId: teamTequilers.id,
                            isReplacement: index === 2
                        }); })
                    })];
                case 17:
                    // Asociar jugadores al equipo "Tequilers", indicando que "Arturo" es un reemplazo
                    _d.sent();
                    return [4 /*yield*/, prisma.session.create({
                            data: {
                                date: new Date(2024, 2, 19),
                                tournamentId: tournament.id
                            }
                        })];
                case 18:
                    session = _d.sent();
                    // Crear sesiones de jugadores para "Tuvo miedo"
                    return [4 /*yield*/, prisma.teamPlayerSession.createMany({
                            data: [
                                {
                                    teamPlayerId: 1,
                                    sessionId: session.id,
                                    line1: getRandomInt(150, 230),
                                    line2: getRandomInt(150, 230),
                                    line3: getRandomInt(150, 230),
                                    assistance: 1,
                                    payment: 1,
                                    handicap: 40,
                                    laneId: 17
                                },
                                {
                                    teamPlayerId: 2,
                                    sessionId: session.id,
                                    line1: getRandomInt(150, 230),
                                    line2: getRandomInt(150, 230),
                                    line3: getRandomInt(150, 230),
                                    assistance: 1,
                                    payment: 1,
                                    handicap: 38,
                                    laneId: 19
                                },
                                {
                                    teamPlayerId: 3,
                                    sessionId: session.id,
                                    line1: getRandomInt(150, 230),
                                    line2: getRandomInt(150, 230),
                                    line3: getRandomInt(150, 230),
                                    assistance: 1,
                                    payment: 1,
                                    handicap: 4,
                                    laneId: 21
                                },
                                {
                                    teamPlayerId: 4,
                                    sessionId: session.id,
                                    line1: getRandomInt(150, 230),
                                    line2: getRandomInt(150, 230),
                                    line3: getRandomInt(150, 230),
                                    assistance: 1,
                                    payment: 1,
                                    handicap: 14,
                                    laneId: 23
                                },
                            ]
                        })];
                case 19:
                    // Crear sesiones de jugadores para "Tuvo miedo"
                    _d.sent();
                    // Crear sesiones de jugadores para "Tequilers
                    // Crear sesiones de jugadores para "Tequilers"
                    return [4 /*yield*/, prisma.teamPlayerSession.createMany({
                            data: [
                                {
                                    teamPlayerId: 5,
                                    sessionId: session.id,
                                    line1: getRandomInt(150, 230),
                                    line2: getRandomInt(150, 230),
                                    line3: getRandomInt(150, 230),
                                    assistance: 1,
                                    payment: 1,
                                    handicap: 0,
                                    laneId: 18
                                },
                                {
                                    teamPlayerId: 6,
                                    sessionId: session.id,
                                    line1: getRandomInt(150, 230),
                                    line2: getRandomInt(150, 230),
                                    line3: getRandomInt(150, 230),
                                    assistance: 1,
                                    payment: 1,
                                    handicap: 0,
                                    laneId: 20
                                },
                                {
                                    teamPlayerId: 7,
                                    sessionId: session.id,
                                    line1: getRandomInt(150, 230),
                                    line2: getRandomInt(150, 230),
                                    line3: getRandomInt(150, 230),
                                    assistance: 1,
                                    payment: 1,
                                    handicap: 0,
                                    laneId: 22
                                },
                                {
                                    teamPlayerId: 8,
                                    sessionId: session.id,
                                    line1: getRandomInt(150, 230),
                                    line2: getRandomInt(150, 230),
                                    line3: getRandomInt(150, 230),
                                    assistance: 1,
                                    payment: 1,
                                    handicap: 0,
                                    laneId: 24
                                },
                            ]
                        })];
                case 20:
                    // Crear sesiones de jugadores para "Tequilers
                    // Crear sesiones de jugadores para "Tequilers"
                    _d.sent();
                    console.log("Datos de semilla insertados correctamente.");
                    return [2 /*return*/];
            }
        });
    });
}
main()["catch"](function (error) {
    console.error("Error al insertar datos de semilla:", error);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// Función para generar un número entero aleatorio entre un rango dado
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
