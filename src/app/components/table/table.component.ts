import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/games.model';
import { jackpot } from 'src/app/models/jackpots.models';
import { GameFeedService } from 'src/app/services/game-feed.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public  gameList$!: Game[]
  private jackpot$!: jackpot[]

  constructor(private service: GameFeedService) { }

  ngOnInit(): void {
    this.service.getAllGames().pipe().subscribe(data=>{
      this.gameList$=data.filter(data=>data.categories.includes("table"))
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
