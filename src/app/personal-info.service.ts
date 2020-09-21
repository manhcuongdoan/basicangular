import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface PersonalInfo {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Advertising {
  company: string;
  url: string;
  text: string;
}

export interface DataJson {
  page: number;
  per_page: number;
  total: number;
  total_pages: 2;
  data: PersonalInfo[];
  ad: Advertising;
}



@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  private dataJsonUrl = 'https://reqres.in/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
    
    ) { }


  public getInfo(): Observable<DataJson> {
    return this.http.get<DataJson>(this.dataJsonUrl);
  }

  public getInfoDetailJson(id: number): Observable<PersonalInfo> {
    const url = `${this.dataJsonUrl}/${id}`;
    return this.http.get<PersonalInfo>(url).pipe(
      // tap(_ => this.log('fetched datajson'))

    );
  }


  public addPersonalInfoJson(personalInfo: PersonalInfo) {
    return this.http.post<PersonalInfo>(this.dataJsonUrl, personalInfo, this.httpOptions);
  }


  public updatePersonalInfoJson(personalInfo: PersonalInfo) {
    return this.http.put(this.dataJsonUrl, personalInfo, this.httpOptions);
  }

  public deletePersonalInfoJson(personalInfo: PersonalInfo | number) {
    const id = typeof personalInfo === 'number' ? personalInfo : personalInfo.id;
    const url = `${this.dataJsonUrl}/${id}`;
    
    return this.http.delete<PersonalInfo>(url, this.httpOptions);

  }


}
