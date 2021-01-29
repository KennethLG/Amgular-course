import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Todos } from "../Todos";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  todos: Todos[];

  constructor(private dataService: DataService) { 
    this.dataService.getData().subscribe(data => {
      this.todos = data;
    })
  }

  ngOnInit(): void {
  }

}
