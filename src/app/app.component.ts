import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Game } from './classes/game';


declare var babylonjs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';

  ngAfterViewInit() {
    let game = new Game('renderCanvas');
    game.createScene();

    game.animate();
  }
}
