import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloKodoComponent } from './hello-kodo/hello-kodo.component';

const routes: Routes = [
{
component:HelloKodoComponent,
path:'get/:page'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
