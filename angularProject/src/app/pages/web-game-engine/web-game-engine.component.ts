import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WindowCreatorService} from "../../services/webGameEngine/windowCreator/window-creator.service";

@Component({
  selector: 'app-web-game-engine',
  templateUrl: './web-game-engine.component.html',
  styleUrls: ['./web-game-engine.component.scss']
})
export class WebGameEngineComponent implements OnInit, AfterViewInit {

  @ViewChild('div') div: HTMLDivElement;
  constructor(private windowCreator: WindowCreatorService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.windowCreator.init(this.div, 500, 500);
  }

}
