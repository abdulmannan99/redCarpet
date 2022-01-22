import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohsinComponent } from './mohsin.component';

describe('MohsinComponent', () => {
  let component: MohsinComponent;
  let fixture: ComponentFixture<MohsinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MohsinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MohsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
