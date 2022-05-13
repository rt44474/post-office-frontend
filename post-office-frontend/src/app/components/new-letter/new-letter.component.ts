import { Component, OnInit } from '@angular/core';
import { LetterModel } from 'src/app/models/LetterModel';
import { NewLetterService } from 'src/app/services/new-letter.service';

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.scss'],
})
export class NewLetterComponent implements OnInit {
  name: string = '';
  pin: string = '';
  letter: LetterModel = new LetterModel();
  status: string[] = ['VIP', 'Nagły'];
  chosenStatus: string = 'Status';
  constructor(private NewLetterSerivce: NewLetterService) {}

  ngOnInit(): void {}

  async newLetter(name: string, pin: string) {
    //console.log(this.chosenStatus);
    //console.log(pin);
    if (pin === '') {
      pin = '0';
    }
    if (this.chosenStatus === 'VIP') {
      if (this.pin !== '8888') {
        alert('Zły pin!');
      } else {
        await this.NewLetterSerivce.sendLetter(name, pin)
          .then((response) => {
            if (response === null) {
              alert('Pseudonim zajęty!');
            } else {
              this.letter = response;
            }
          })
          .catch((e) => {
            alert('Wystąpił błąd');
          });
      }
    } else if (this.chosenStatus === 'Nagły') {
      if (this.pin !== '0000') {
        alert('Zły pin!');
      } else {
        await this.NewLetterSerivce.sendLetter(name, pin)
          .then((response) => {
            if (response === null) {
              alert('Pseudonim zajęty!');
            } else {
              this.letter = response;
            }
          })
          .catch((e) => {
            alert('Wystąpił błąd');
          });
      }
    } else {
      await this.NewLetterSerivce.sendLetter(name, pin)
        .then((response) => {
          if (response === null) {
            alert('Pseudonim zajęty!');
          } else {
            this.letter = response;
          }
        })
        .catch((e) => {
          alert('Wystąpił błąd');
        });
    }
  }

  chooseStatus(status: string) {
    this.chosenStatus = status;
  }
}
