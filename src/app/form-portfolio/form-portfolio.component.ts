import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-form-portfolio',
  templateUrl: './form-portfolio.component.html',
  styleUrl: './form-portfolio.component.css'
})
export class FormPortfolioComponent {
  isLoading: boolean = true;
  receivedId: any;
  formportfolio!: FormGroup;

constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private dataService: ServicesService){}
  ngOnInit(): void {
    this.receivedId = this.route.snapshot.paramMap.get('id');
    let numberValue = parseInt(this.receivedId);

    console.log(typeof numberValue);
    this.formportfolio = this.formBuilder.group({
      competence: ['', Validators.required],
      experience: ['', Validators.required],
      project: ['', Validators.required],
      
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  onSubmit() {
    const formData = this.formportfolio.value;
    let numberValue = parseInt(this.receivedId);
    const portfolio = new Portfolio();
    portfolio.competence=formData.competence;
    portfolio.experience=formData.experience;
    portfolio.project=formData.project;
    portfolio.idprofile=numberValue;
    // console.log(this.receivedId);
    // console.log(numberValue);

    this.dataService.saveDataPortfolio(portfolio).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        console.log(portfolio);
        this.router.navigate(['/profiles']);

      },
      (error) => {
        console.error('Error saving data:', error);
        // Handle error as needed
      }
    );
  }
}
