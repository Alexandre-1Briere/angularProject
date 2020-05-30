import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SnakeComponent } from './pages/snake/snake.component';
import { HomeComponent } from './pages/home/home.component';
import { WebGameEngineComponent } from './pages/web-game-engine/web-game-engine.component';

@NgModule({
  declarations: [
    SnakeComponent,
    HomeComponent,
    WebGameEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [WebGameEngineComponent]
})
export class AppModule { }
