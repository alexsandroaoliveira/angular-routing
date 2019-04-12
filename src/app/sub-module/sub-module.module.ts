import { NgModule } from '@angular/core';
import { SubComponent1Component } from './sub-component1.component';
import { AppSubRoutingModule } from './sub-module-routing.module';
import { SubComponent2Component } from './sub-component2.component';
import { SubModuleComponent } from './sub-module.component';

@NgModule({
  declarations: [
    SubModuleComponent,
    SubComponent1Component,
    SubComponent2Component
  ],
  imports: [
    AppSubRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class SubModuleModule { }
