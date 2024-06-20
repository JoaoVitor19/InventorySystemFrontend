import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuthenticated = authService.isLoggedIn();

  console.log(isAuthenticated);
  
  if (!isAuthenticated) {
    // Redireciona para a página de login se não estiver autenticado
    router.parseUrl('/login');
    return false;
  }

  return true;
};
