import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelResponseComponent } from './nouvel-response.component';

describe('NouvelResponseComponent', () => {
  let component: NouvelResponseComponent;
  let fixture: ComponentFixture<NouvelResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
