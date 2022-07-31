import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/games.model';
import { jackpot } from 'src/app/models/jackpots.models';
import { GameFeedService } from 'src/app/services/game-feed.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {

  public  gameList$!: Game[]
  private jackpot$!: jackpot[]

  constructor(private service: GameFeedService) { }

  ngOnInit(): void {
    this.service.getAllGames().pipe().subscribe(data=>{
      this.gameList$=data.filter(data=>data.categories.includes("top"))
    })

    this.service.getAllJackpots().pipe().subscribe(data=>{
      this.jackpot$=data
    })
    
  }

  hasAmount(id:string){
    for(let pot of this.jackpot$){
      if(pot.game==id) return pot.amount
    }
    return 0
  }

}
