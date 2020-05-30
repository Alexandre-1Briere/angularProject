import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowCreatorService {
  container: HTMLDivElement | undefined;
  dimension: number[];

  constructor() {
    this.container = undefined;
    this.dimension = [];
  }

  init(container: HTMLDivElement) {
    this.container = container;
    this.dimension[0] = container.offsetHeight;
    this.dimension[1] = container.offsetWidth;
  }
}
