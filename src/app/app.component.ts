import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { GamesComponent } from './games/games.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CardsComponent,MusicPlayerComponent, GamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingPage';
}
