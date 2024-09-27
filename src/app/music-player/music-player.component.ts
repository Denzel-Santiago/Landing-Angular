import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.css'
})
export class MusicPlayerComponent {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  pauseAudio() {
    this.audioPlayer.nativeElement.pause();
  }

  stopAudio() {
    this.audioPlayer.nativeElement.pause();
    this.audioPlayer.nativeElement.currentTime = 0;
  }
}