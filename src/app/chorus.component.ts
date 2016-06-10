import { Component } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'chorus-app',
  templateUrl: 'chorus.component.html',
  styleUrls: ['chorus.component.css']
})
export class ChorusAppComponent {
  items: Observable<any[]>;
  constructor(af: AngularFire) {
    // create a list at /items
    this.items = af.list('/items');
  };
  title = 'chorus works!';
}
