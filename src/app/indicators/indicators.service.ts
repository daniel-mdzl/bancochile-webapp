import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndicatorList } from './models/indicator-list';
import { Indicator } from './models/indicator';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  private endpoint:string = 'http://localhost:8080/api/'
  constructor(private api: HttpClient) { }

  getIndicators(): Observable<IndicatorList> {
    return this.api.get<IndicatorList>(`${this.endpoint}indicators`)
  }

  getIndicatorByName(name:String): Observable<Indicator> {
    return this.api.get<Indicator>(`${this.endpoint}indicators/${name}`)
  }
}
