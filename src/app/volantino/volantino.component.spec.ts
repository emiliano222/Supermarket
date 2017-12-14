import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolantinoComponent } from './volantino.component';

describe('VolantinoComponent', () => {
  let component: VolantinoComponent;
  let fixture: ComponentFixture<VolantinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolantinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolantinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
