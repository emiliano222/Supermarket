import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdotti2Component } from './lista-prodotti2.component';

describe('ListaProdotti2Component', () => {
  let component: ListaProdotti2Component;
  let fixture: ComponentFixture<ListaProdotti2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProdotti2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdotti2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
