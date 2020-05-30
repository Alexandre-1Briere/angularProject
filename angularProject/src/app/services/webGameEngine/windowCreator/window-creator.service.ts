import {ElementRef, Injectable, Renderer2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowCreatorService {
  container: HTMLDivElement | undefined;
  window: HTMLCanvasElement | undefined;
  dimension: number[];

  constructor() {
    this.container = undefined;
    this.window = undefined;
    this.dimension = [];
  }

  init(container: HTMLDivElement, width: number, height: number) {
    if(container) {
      this.container = container;
      this.dimension[0] = height;
      this.dimension[1] = width;
      this.window = document.createElement('canvas');
      this.window.setAttribute('height', this.dimension[0].toString());
      this.window.setAttribute('width', this.dimension[1].toString());
      console.log(this.container);
      console.log(this.window);
      (this.container as unknown as ElementRef<HTMLDivElement>).nativeElement.appendChild(this.window);
    }
  }
}
