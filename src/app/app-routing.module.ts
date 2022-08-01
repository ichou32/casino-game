import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackjackComponent } from './components/blackjack/blackjack.component';
import { JackpotsComponent } from './components/jackpots/jackpots.component';
import { LiveComponent } from './components/live/live.component';
import { NewGamesComponent } from './components/new-games/new-games.component';
import { OtherComponent } from './components/other/other.component';
import { PokerComponent } from './components/poker/poker.component';
import { RouletteComponent } from './components/roulette/roulette.component';
import { SlotsComponent } from './components/slots/slots.component';
import { TableComponent } from './components/table/table.component';
import { TopGamesComponent } from './components/top-games/top-games.component';

const routes: Routes = [
  {
    path:"", component: TopGamesComponent
  },
  {
    path:'top-games', component: TopGamesComponent
  },
  {
    path:'new-games', component: NewGamesComponent
  },
  {
    path:'slots', component: SlotsComponent
  },
  {
    path:'jackpots', component: JackpotsComponent
  },
  {
    path:'live', component: LiveComponent
  },
  {
    path:'blackjack', component: BlackjackComponent
  },
  {
    path:'roulette', component: RouletteComponent
  },
  {
    path:'table', component: TableComponent
  },
  {
    path:'poker', component: PokerComponent
  },
  {
    path:'other', component: OtherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
