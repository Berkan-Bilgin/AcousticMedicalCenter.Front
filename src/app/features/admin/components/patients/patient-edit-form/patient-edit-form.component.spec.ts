import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditFormComponent } from './patient-edit-form.component';

describe('PatientEditFormComponent', () => {
  let component: PatientEditFormComponent;
  let fixture: ComponentFixture<PatientEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
