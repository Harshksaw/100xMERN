import { gameManager, games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    // games.push({
    //    id: Math.random().toString(),
    //     whitePlayerName: 'Harsh',
    //     blackPlayerName: 'Ankit',
    //     moves: []
    // })
    gameManager.addGame(Math.random().toString());
    

}, 5000)
