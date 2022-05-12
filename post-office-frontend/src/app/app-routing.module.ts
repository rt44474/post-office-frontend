import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app-routes';
import { LetterComponent } from './components/letter/letter.component';
import { NewLetterComponent } from './components/new-letter/new-letter.component';

const routes: Routes = [
  {path: AppRoutes.EMPTY, pathMatch: 'full', redirectTo: AppRoutes.HOME},
  {path: AppRoutes.HOME, component: LetterComponent},
  {path: AppRoutes.REGISTER_LETTER, component: NewLetterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
