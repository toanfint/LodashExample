import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  constructor() { }

  checkEqual(obj1: any, obj2: any) {
    return _.isEqual(obj1, obj2);
  }
}
