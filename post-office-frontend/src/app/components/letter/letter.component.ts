import { Component, OnInit } from '@angular/core';
import { LetterModel } from 'src/app/models/LetterModel';
import { LetterService } from 'src/app/services/letter.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss'],
})
export class LetterComponent implements OnInit {
  allLetters: LetterModel[] = [];
  allInstantLetters: LetterModel[] = [];

  constructor(private LetterService: LetterService) {
    setInterval(() => {
      this.getAllSorted();
    }, 5000);
    setInterval(() => {
      this.getAllInstant();
    }, 5000);
  }

  ngOnInit(): void {
    this.LetterService.getRefreshNeeded.subscribe(() => {
      this.getAllSorted();
      this.getAllInstant();
    });
    this.getAllSorted();
    this.getAllInstant();
  }

  getAllInstant() {
    this.LetterService.getAllInstant().subscribe((response) => {
      this.allInstantLetters = response;
    });
  }

  getAllSorted() {
    this.LetterService.getAllLettersSorted().subscribe((response) => {
      this.allLetters = response;
    });
  }
}
