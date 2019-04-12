import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubComponent1Component } from './sub-component1.component';
import { SubComponent2Component } from './sub-component2.component';
import { SubModuleComponent } from './sub-module.component';

const subRoutes: Routes = [
    {
        path: '', component: SubModuleComponent,
        children: [
            { path: 'comp1', component: SubComponent1Component },
            { path: 'comp2', component: SubComponent2Component },
            { path: 'subsubmodule', loadChildren: './sub-sub-module/sub-sub-module.module#SubSubModuleModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(subRoutes)],
    exports: [RouterModule]
})
export class AppSubRoutingModule { }
