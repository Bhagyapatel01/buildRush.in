import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClientComponent } from './components/client/client.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ProgrammerComponent } from './Pages/programmer/programmer.component';
import { SettingComponent } from './Pages/setting/setting.component';
import { CardDataComponent } from './Pages/card-data/card-data.component';
import { TaskComponent } from './components/task/task.component';
//import { ProductDetailComponent } from './components/product-detail/product-detail.component'; // Your ProductDetailComponent



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'main', component: MainComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'client', component: ClientComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path :'task', component:TaskComponent},
  // { path: 'task/:id', component: ProductDetailComponent },

  {
    path: 'programmer',
    component: ProgrammerComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'TaskDetails',
    component : CardDataComponent
  }
];