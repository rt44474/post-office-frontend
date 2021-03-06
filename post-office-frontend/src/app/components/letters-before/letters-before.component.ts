import { Component, OnInit } from '@angular/core';
import { LetterModel } from 'src/app/models/LetterModel';
import { LettersBeforeService } from 'src/app/services/letters-before.service';

@Component({
  selector: 'app-letters-before',
  templateUrl: './letters-before.component.html',
  styleUrls: ['./letters-before.component.scss'],
})
export class LettersBeforeComponent implements OnInit {
  allLetters: LetterModel[] = [];
  uniqueId: string = '';
  name: string = '';
  intervalIdUnique: null | ReturnType<typeof setTimeout> = null;
  intervalIdName: null | ReturnType<typeof setTimeout> = null;

  constructor(private LetterService: LettersBeforeService) {}

  ngOnInit(): void {}

  getAllBeforeUniqueId(uniqueId: string) {
    let intervalId;
    this.LetterService.getAllLettersBefore(uniqueId).subscribe(
      (response) => {
        if (response === null) {
          this.allLetters = [];
          clearInterval(Number(this.intervalIdUnique));
        } else {
          this.allLetters = response;
          if (this.intervalIdUnique === null) {
            this.intervalIdUnique = setInterval(() => {
              this.getAllBeforeUniqueId(this.uniqueId);
            }, 5000);
          }
        }
      },
      (error) => {
        this.allLetters = [];
        clearInterval(Number(this.intervalIdUnique));
      }
    );
  }

  getAllBeforeName(name: string) {
    this.LetterService.getAllLettersBeforeName(name).subscribe(
      (response) => {
        if (response === null) {
          this.allLetters = [];
          clearInterval(Number(this.intervalIdName));
        } else {
          this.allLetters = response;
          if (this.intervalIdName === null) {
            this.intervalIdName = setInterval(() => {
              this.getAllBeforeName(this.name);
            }, 5000);
          }
        }
      },
      (error) => {
        this.allLetters = [];
        clearInterval(Number(this.intervalIdName));
      }
    );
  }
}
