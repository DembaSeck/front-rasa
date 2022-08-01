import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelSpecialiteComponent } from './nouvel-specialite.component';

describe('NouvelSpecialiteComponent', () => {
  let component: NouvelSpecialiteComponent;
  let fixture: ComponentFixture<NouvelSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelSpecialiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
