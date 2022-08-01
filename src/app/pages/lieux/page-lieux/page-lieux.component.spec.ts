import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieuxComponent } from './page-lieux.component';

describe('PageLieuxComponent', () => {
  let component: PageLieuxComponent;
  let fixture: ComponentFixture<PageLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLieuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
