import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { GameAmount } from 'src/app/models/gameAmount.model';
import { Game } from 'src/app/models/games.model';
import { jackpot } from 'src/app/models/jackpots.models';
import { GameFeedService } from 'src/app/services/game-feed.service';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {
  public  blackjack$!: Game[]
  private jackpot$!: jackpot[]

  constructor(private service: GameFeedService) { }

  ngOnInit(): void {
    this.service.getAllGames().pipe().subscribe(data=>{
      this.blackjack$=data.filter(data=>data.categories.includes("blackjack"))
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
