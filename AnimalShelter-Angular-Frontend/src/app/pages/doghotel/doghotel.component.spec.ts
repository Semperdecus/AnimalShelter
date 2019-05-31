import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoghotelComponent } from './doghotel.component';

describe('DoghotelComponent', () => {
  let component: DoghotelComponent;
  let fixture: ComponentFixture<DoghotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoghotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoghotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
