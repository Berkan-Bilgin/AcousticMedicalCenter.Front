import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditFormComponent } from './doctor-edit-form.component';

describe('DoctorEditFormComponent', () => {
  let component: DoctorEditFormComponent;
  let fixture: ComponentFixture<DoctorEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
