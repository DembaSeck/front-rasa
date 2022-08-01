import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResponseComponent } from './page-response.component';

describe('PageResponseComponent', () => {
  let component: PageResponseComponent;
  let fixture: ComponentFixture<PageResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
