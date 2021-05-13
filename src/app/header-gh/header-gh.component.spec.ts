import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGhComponent } from './header-gh.component';

describe('HeaderGhComponent', () => {
  let component: HeaderGhComponent;
  let fixture: ComponentFixture<HeaderGhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
