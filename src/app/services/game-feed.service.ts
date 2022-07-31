import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/games.model';
import { jackpot } from '../models/jackpots.models';

@Injectable({
  providedIn: 'root'
})
export class GameFeedService {
  host = 'http://stage.whgstage.com/front-end-test/games.php'
  constructor(private http: HttpClient) { }

  getAllGames():Observable<Game[]>{
    return this.http.get<Game[]>('http://stage.whgstage.com/front-end-test/games.php')
  }
  getAllJackpots():Observable<jackpot[]>{
    return this.http.get<jackpot[]>('http://stage.whgstage.com/front-end-test/jackpots.php')
  }
}
