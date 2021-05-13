import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryListGhComponent } from './repository-list-gh.component';

describe('RepositoryListGhComponent', () => {
  let component: RepositoryListGhComponent;
  let fixture: ComponentFixture<RepositoryListGhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryListGhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListGhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
