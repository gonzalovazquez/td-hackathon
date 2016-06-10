import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ChorusAppComponent } from '../app/chorus.component';

beforeEachProviders(() => [ChorusAppComponent]);

describe('App: Chorus', () => {
  it('should create the app',
      inject([ChorusAppComponent], (app: ChorusAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'chorus works!\'',
      inject([ChorusAppComponent], (app: ChorusAppComponent) => {
    expect(app.title).toEqual('chorus works!');
  }));
});
