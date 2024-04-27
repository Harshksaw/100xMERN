interface Game {
    id: string; 
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}
//static variables and methods 
//singleton

class GameManager {
    private games: Game[] = [];

//SINGLETON pattern
    private static instance: GameManager;

    private constructor{
        this.games = [];
    }

    static getInstance(){
        // const gameManager = new GameManager()
        if(GameManager.instance){
            return GameManager
        }
        GameManager.instance = new GameManager();
        return GameManager.instance
    }


    public getGames() {
        return this.games;
    }

    // e5e7
    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
    public addGame(gameId: string){
        const game = {
            id: gameId,
            whitePlayerName: 'Harsh',
            blackPlayerName: 'Denxel',
            moves : []
        }
        this.games.push(game);
    }

    public logState() {
        console.log(this.games);
    }
}

export const gameManager = GameManager.getInstance();