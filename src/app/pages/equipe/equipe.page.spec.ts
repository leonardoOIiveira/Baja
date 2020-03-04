import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipePage } from './equipe.page';

describe('EquipePage', () => {
  let component: EquipePage;
  let fixture: ComponentFixture<EquipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
