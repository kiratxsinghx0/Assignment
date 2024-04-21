import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MySpaceComponent} from './my-space.component'
const routes: Routes = [
  {path: '', component: MySpaceComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySpaceRoutingModule { }
