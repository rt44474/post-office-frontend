import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from './app-routes';
import { faEnvelope, faPeopleGroup, faUserCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  appRoutes = AppRoutes;
  title = 'post-office-frontend';
  faE = faEnvelope;
  faPG = faPeopleGroup;
  faUC = faUserCheck;



}
