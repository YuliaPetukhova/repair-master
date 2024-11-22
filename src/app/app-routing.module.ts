import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', loadChildren: () => import('./components/main/main.component').then(m => m.MainComponent) },
    { path: 'about', loadChildren: () => import('./components/about/about.component').then(m => m.AboutComponent) },
    { path: 'repair-services', loadChildren: () => import('./components/repair-services/repair-services.component').then(m => m.RepairServicesComponent) },
    { path: 'reviews', loadChildren: () => import('./components/reviews/reviews.component').then(m => m.ReviewsComponent) },
    { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
