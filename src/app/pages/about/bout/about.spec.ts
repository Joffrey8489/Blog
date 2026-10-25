import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bout } from './about';

describe('Bout', () => {
  let component: Bout;
  let fixture: ComponentFixture<Bout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bout],
    }).compileComponents();

    fixture = TestBed.createComponent(Bout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
