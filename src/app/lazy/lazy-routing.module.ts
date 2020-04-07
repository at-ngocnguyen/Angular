import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LazyComponent } from './lazy.component';
import { TemplateComponent } from '../component/form/template_form/template/template.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule { }
