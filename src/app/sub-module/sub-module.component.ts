import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-module',
  template: '<div style="border: solid">Sub-Module<br /><router-outlet></router-outlet></div>'
})
export class SubModuleComponent {
  title = 'Component 1';
}
