import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaClubPage } from './baja-club.page';

describe('BajaClubPage', () => {
  let component: BajaClubPage;
  let fixture: ComponentFixture<BajaClubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaClubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
