import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLieuxComponent } from './detail-lieux.component';

describe('DetailLieuxComponent', () => {
  let component: DetailLieuxComponent;
  let fixture: ComponentFixture<DetailLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLieuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
