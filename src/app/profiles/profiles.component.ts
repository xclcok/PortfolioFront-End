import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'] // Use styleUrls instead of styleUrl
})
export class ProfilesComponent {
  isLoading: boolean = true;
  dataList!: any[];

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
    this.service.getProfiles().subscribe((data: any[]) => {
      this.dataList = data;
    });
  }
  showportfolio(id:any){
    const profile = this.dataList.find(p => p.id === id);
    if (profile) {
      profile.hidden = !profile.hidden;
    }
    this.router.navigate(['/display', id]);
  }
  toggleCardVisibility(profile: any): void {
    profile.hidden = !profile.hidden;
  }
  
  refreshPage(): void {
    window.location.reload();
  }
}
