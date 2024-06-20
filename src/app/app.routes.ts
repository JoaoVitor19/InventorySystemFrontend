import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { authGuard } from './pages/auth.guard';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [authGuard] },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'products', component: ProductComponent, canActivate: [authGuard] },
    { path: 'product/:id', component: ProductFormComponent, canActivate: [authGuard] },
    { path: 'product/new', component: ProductFormComponent, canActivate: [authGuard] },
    { path: '**', component: NotfoundComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
