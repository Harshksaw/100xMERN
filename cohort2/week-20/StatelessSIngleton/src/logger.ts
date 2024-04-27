import { gameManager} from "./store";



export const startLogger = ()=>{

    setInterval(()=>{
        
        console.log(gameManager);
    },5000)
}