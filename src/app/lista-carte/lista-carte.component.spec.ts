import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarteComponent } from './lista-carte.component';

describe('ListaCarteComponent', () => {
  let component: ListaCarteComponent;
  let fixture: ComponentFixture<ListaCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
