import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGhComponent } from './main-gh.component';

describe('MainGhComponent', () => {
  let component: MainGhComponent;
  let fixture: ComponentFixture<MainGhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
