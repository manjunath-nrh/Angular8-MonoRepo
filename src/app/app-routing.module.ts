import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomPreloadingService } from './custom-preloading.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    data: { preload: true },
    loadChildren: () =>
      import('./feature/products/products.module').then(m => m.ProductsModule)
  },
  // { path: '**', redirectTo: '/home'},
  // or
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
