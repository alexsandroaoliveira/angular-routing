import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubSubComponentComponent } from './sub-sub-component.component';
import { SubSubComponent2Component } from './sub-sub-component2.component';

const subSubRoutes: Routes = [
    { path: 'comp1', component: SubSubComponentComponent },
    { path: 'comp2', component: SubSubComponent2Component }
];

@NgModule({
    imports: [RouterModule.forChild(subSubRoutes)],
    exports: [RouterModule]
})
export class AppSubSubRoutingModule { }
