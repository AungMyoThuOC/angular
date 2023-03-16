import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  title : string = "Onii Chan"

  courseid =4;

  red : boolean = true;

  imgurl : string = 'https://wallpaperaccess.com/full/386762.jpg'
    
    ngOnInit(): void {
      this.courseid = 4;
      this.title = "Onii Chan baka"
    }
    
  }
