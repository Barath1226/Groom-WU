import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  imgVisible = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.imgVisible = false
  }

}