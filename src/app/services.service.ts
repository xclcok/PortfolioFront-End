import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from './portfolio';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = "http://localhost:8888/SERVICE-PROFILE/api/profiles";
  private urlAddProfile = "http://localhost:8083/api";
  private urlAddPortfolio = "http://localhost:8082/api/portfolios/add";
  private urlportfoliobyid = "http://localhost:8082/api/portfolios";



  constructor(private http: HttpClient) { }

  getProfiles(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  saveData(data: any): Observable<any> {
    return this.http.post(`${this.urlAddProfile}`, data);
  }

  saveDataPortfolio(data: Portfolio): Observable<any> {
  //   const headers = new HttpHeaders();
  // headers.set('Content-Type', 'multipart/form-data');
    return this.http.post(`${this.urlAddPortfolio}`, data);
  }
  getPortfoliobyid(id: any): Observable<any> {
    return this.http.get<any>(`${this.urlportfoliobyid}/${id}`);
  }
  
}
