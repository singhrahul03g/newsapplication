import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard} from './guards/auth.guard';
import { CategoryComponent } from './pages/dashboard/category/category.component';
import { AddcategoryComponent } from './pages/dashboard/addcategory/addcategory.component';
import { EditcatComponent } from './pages/dashboard/editcat/editcat.component';
import { AddnewsComponent } from './dashboard/addnews/addnews.component';
import { CpassComponent } from './dashboard/cpass/cpass.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'category',component:CategoryComponent},
    {path:'addcategory',component:AddcategoryComponent},
    {path:'editcategory/:id',component:EditcatComponent},
    {path:'addnews',component:AddnewsComponent},
    {path:'changepassword',component:CpassComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
