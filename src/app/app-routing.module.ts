import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {path : '',component: BannerComponent},
  {path : 'find',component: SearchBarComponent},
  {path : 'feedback',component: FeedbackComponent},
  {path : 'account',component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
