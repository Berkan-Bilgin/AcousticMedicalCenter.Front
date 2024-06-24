import { Component } from '@angular/core';
import { DoctorSettingsFormComponent } from '../../../features/doctors/components/doctor-settings-form/doctor-settings-form.component';
import { PersonalInformationFormComponent } from '../../../features/doctors/components/personal-information-form/personal-information-form.component';

@Component({
  selector: 'app-doctor-settings',
  standalone: true,
  imports: [PersonalInformationFormComponent, DoctorSettingsFormComponent],
  templateUrl: './doctor-settings.component.html',
  styleUrl: './doctor-settings.component.scss',
})
export class DoctorSettingsComponent {}
