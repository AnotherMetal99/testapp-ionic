import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'resources',
    loadChildren: () => import('./pages/resources/resources.module').then( m => m.ResourcesPageModule)
  },
  {
    path: 'assistance',
    loadChildren: () => import('./pages/assistance/assistance.module').then( m => m.AssistancePageModule)
  },
  {
    path: 'customer-login',
    loadChildren: () => import('./pages/customer-login/customer-login.module').then( m => m.CustomerLoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
