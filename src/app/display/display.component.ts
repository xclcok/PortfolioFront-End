import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  isLoading: boolean = true;
  dataList!: any;
  dataObject: any;

  receivedId: any;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private dataService: ServicesService){}
  ngOnInit(): void {
  this.receivedId = this.route.snapshot.paramMap.get('id');
  console.log(this.receivedId);
  setTimeout(() => {
    this.isLoading = false;
  }, 500);
  this.dataService.getPortfoliobyid(this.receivedId).subscribe((data: any) => {
    this.dataList = data;
    console.log(this.dataList);
  });
}
goBack(): void {
  this.router.navigate(['/profiles']);
}
}
