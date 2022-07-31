import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackjackComponent } from './components/blackjack/blackjack.component';
import { JackpotsComponent } from './components/jackpots/jackpots.component';
import { LiveComponent } from './components/live/live.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewGamesComponent } from './components/new-games/new-games.component';
import { OtherComponent } from './components/other/other.component';
import { RouletteComponent } from './components/roulette/roulette.component';
import { SlotsComponent } from './components/slots/slots.component';
import { TableComponent } from './components/table/table.component';
import { TopGamesComponent } from './components/top-games/top-games.component';
import { PokerComponent } from './components/poker/poker.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewGamesComponent,
    TopGamesComponent,
    SlotsComponent,
    JackpotsComponent,
    LiveComponent,
    BlackjackComponent,
    RouletteComponent,
    TableComponent,
    OtherComponent,
    PokerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
