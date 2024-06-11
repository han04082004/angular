import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtDecode } from "jwt-decode";

const canActivateProduct: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  let token: any = localStorage.getItem('token');
  const decoded : any = jwtDecode(token);
  console.log(decoded);
  let jwtHelper = new JwtHelperService();
  console.log(jwtHelper.isTokenExpired(token));
  if(!token) return true
  if (!token) return false;
  return decoded.role == 1  && !jwtHelper.isTokenExpired(token);
};


export const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent,
    loadChildren:()=> import("./shared/shared.module").then((m) => m.SharedModule),
  },
  { path: 'product', component: ProductComponent, 
    canActivate:[canActivateProduct],
  },
  { path: 'product/detail', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
