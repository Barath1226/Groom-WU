import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  facilities = [
    {
      url: "https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710152__340.jpg",
      facName: "Consult with our Doctors" 
    },
    {
      url: "https://media.istockphoto.com/photos/woman-giving-us-dollar-note-for-the-pizza-picture-id917033856?b=1&k=20&m=917033856&s=170667a&w=0&h=XufT_jpuzhp2yZyhYIV23XCAu7Sirm2tamk0ZOrc5Ok=",
      facName: "Cash on delivery available"
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/03/21/20/04/black-1271449__340.png",
      facName: "Get 20% offer through online payment"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
