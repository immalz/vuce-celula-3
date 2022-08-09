import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IModuleContentGroup } from 'projects/vuce2-lib-custom/src/public-api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  protected baseUrl: string = 'http://localhost:8083';
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }
  
  getAllModuleContentGroup(objUser: any): Observable<IModuleContentGroup[]> {
    return this.http.post<IModuleContentGroup[]>(`${this.baseUrl}/api/module-content-group/get-content-group-all-by-user`,
      objUser, { headers: this.httpHeaders });
  }
  
}
