import { Injectable } from '@angular/core';
import {Items} from './items'


@Injectable({
  providedIn: 'root'
})
export class GwuserviceService {

  constructor() { }

  orderedItem: Items[]=[]
  getOrders():Items[]{
    return this.orderedItem
  }
}
