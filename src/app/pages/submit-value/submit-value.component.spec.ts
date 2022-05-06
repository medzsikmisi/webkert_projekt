import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitValueComponent } from './submit-value.component';

describe('SubmitValueComponent', () => {
  let component: SubmitValueComponent;
  let fixture: ComponentFixture<SubmitValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
