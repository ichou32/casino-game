import { Game } from "./games.model";
import { jackpot } from "./jackpots.models";

export interface GameAmount{
    id:string,
    name:string,
    image:string,
    categories:string[]
    amount?:number
}