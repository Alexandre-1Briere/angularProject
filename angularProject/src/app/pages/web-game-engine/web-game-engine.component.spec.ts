import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGameEngineComponent } from './web-game-engine.component';

describe('WebGameEngineComponent', () => {
  let component: WebGameEngineComponent;
  let fixture: ComponentFixture<WebGameEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebGameEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebGameEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
