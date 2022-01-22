import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MannanComponent } from './mannan.component';

describe('MannanComponent', () => {
  let component: MannanComponent;
  let fixture: ComponentFixture<MannanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MannanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MannanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
