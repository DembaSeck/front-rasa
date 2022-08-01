import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpecialiteComponent } from './page-specialite.component';

describe('PageSpecialiteComponent', () => {
  let component: PageSpecialiteComponent;
  let fixture: ComponentFixture<PageSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSpecialiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
