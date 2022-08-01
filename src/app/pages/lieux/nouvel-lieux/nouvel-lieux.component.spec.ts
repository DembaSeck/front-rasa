import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelLieuxComponent } from './nouvel-lieux.component';

describe('NouvelLieuxComponent', () => {
  let component: NouvelLieuxComponent;
  let fixture: ComponentFixture<NouvelLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelLieuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
