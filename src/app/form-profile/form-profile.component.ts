import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrl: './form-profile.component.css'
})
export class FormProfileComponent {
  isLoading: boolean = true;
  formprofile!: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService: ServicesService,private router: Router) {}


  ngOnInit(): void {
    this.formprofile = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
  onSubmit() {

    const formData = this.formprofile.value;
    console.log(formData);
    this.dataService.saveData(formData).subscribe(response => {
      console.log('Data saved successfully:', response);
      console.log(response.id);
      const idToSend = response.id;
      this.router.navigate(['/formportfolio', idToSend]);
    });
  }

}
