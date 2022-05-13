import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LetterModel } from '../models/LetterModel';

@Injectable({
  providedIn: 'root',
})
export class NewLetterService {
  private refreshNeeded = new Subject<void>();

  get getRefreshNeeded() {
    return this.refreshNeeded;
  }

  constructor(private httpClient: HttpClient) {}

  sendLetter(name: string, pin: string) {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('pin', pin);
    return this.httpClient
      .post<LetterModel>(`${environment.apiUrl}/letter`, formData)
      .toPromise();
  }
}
