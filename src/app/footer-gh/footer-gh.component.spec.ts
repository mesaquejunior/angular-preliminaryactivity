import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGhComponent } from './footer-gh.component';

describe('FooterGhComponent', () => {
  let component: FooterGhComponent;
  let fixture: ComponentFixture<FooterGhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterGhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterGhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
