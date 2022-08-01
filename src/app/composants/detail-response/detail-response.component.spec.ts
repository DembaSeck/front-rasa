import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResponseComponent } from './detail-response.component';

describe('DetailResponseComponent', () => {
  let component: DetailResponseComponent;
  let fixture: ComponentFixture<DetailResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
