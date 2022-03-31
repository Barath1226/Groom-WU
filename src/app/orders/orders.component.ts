import { Component, OnInit } from '@angular/core';
import { GwuserviceService } from '../gwuservice.service';
import { Items } from '../items';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderItems: Items[] = []
  constructor(private gws:GwuserviceService) { }

  ngOnInit(): void {
  this.orderItems =  this.gws.getOrders()
  }

}
