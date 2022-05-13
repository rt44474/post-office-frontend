import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LetterModel } from '../models/LetterModel';

@Injectable({
  providedIn: 'root',
})
export class LettersBeforeService {
  private refreshNeeded = new Subject<void>();

  get getRefreshNeeded() {
    return this.refreshNeeded;
  }

  constructor(private httpClient: HttpClient) {}

  getAllLettersBefore(uniqueId: string): Observable<LetterModel[]> {
    return this.httpClient.get<LetterModel[]>(
      `${environment.apiUrl}/letter/uID/${uniqueId}`
    );
  }

  getAllLettersBeforeName(name: string): Observable<LetterModel[]> {
    return this.httpClient.get<LetterModel[]>(
      `${environment.apiUrl}/letter/name/${name}`
    );
  }
}
