import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { PopularItems } from '../popular-categories-items'
import { GwuserviceService } from '../gwuservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  populItems =  PopularItems
  filteredItems: Items[] = []
  popItems = [
    {
      imgUrl:"",
      names:"Hair"
    },
    {
      imgUrl:"",
      names:"Skin"
    },
    {
      imgUrl:"",
      names:"Beard"
    },
    {
      imgUrl:"",
      names:"Sleep"
    }
  ]

  stars=[
    {
    starImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4YgYGNqn9XKVuBthN1AAruYNKcCPVJD0yw&usqp=CAU"
    }
  ]
  constructor(private gws : GwuserviceService) { }

  ngOnInit(): void {
  }

  onSelect(item: any):void{
    this.filteredItems = this.populItems.filter(i => i.type == item.names)
 }
 add(item:any){
    this.gws.orderedItem.push(item)
 }
}
