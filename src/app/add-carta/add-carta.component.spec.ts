import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartaComponent } from './add-carta.component';

describe('AddCartaComponent', () => {
  let component: AddCartaComponent;
  let fixture: ComponentFixture<AddCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
