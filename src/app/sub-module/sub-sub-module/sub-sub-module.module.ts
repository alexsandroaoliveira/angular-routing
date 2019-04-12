import { NgModule } from '@angular/core';
import { SubSubComponent2Component } from './sub-sub-component2.component';
import { SubSubComponentComponent } from './sub-sub-component.component';
import { AppSubSubRoutingModule } from './sub-sub-module-routing.module';

@NgModule({
  declarations: [
    SubSubComponentComponent,
    SubSubComponent2Component
  ],
  imports: [
    AppSubSubRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class SubSubModuleModule { }
