import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BannerComponent } from './banner/banner.component';
import { AccountComponent } from './account/account.component';
import { TrendingProjectsComponent } from './trending-projects/trending-projects.component';

const routes: Routes = [
  {path : '',component: BannerComponent},
  {path : 'find',component: SearchBarComponent},
  {path : 'feedback',component: FeedbackComponent},
  {path : 'signin',component: FormComponent},
  {path : 'dashboard',component: AccountComponent},
  {path : 'trending',component: TrendingProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
