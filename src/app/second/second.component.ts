import { Component, OnInit} from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  name: string = "Richter Belmont";
  age: number = 26;
  users: string[] = ["Alucard", "Richter", "Simon"];
  todos: any[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.todos = data;
    });
  }

  addUser(newUser) {
  	this.users.push(newUser.value);
  	newUser.value = "";
  	newUser.focus();
  	return false;
  }

  sayhello(){
  	alert("hola bru");
  }

  deleteUser(user){
  	for(let i = 0; i < this.users.length; i++) {
  		if (user == this.users[i]) {
  			this.users.splice(i, 1);
  		}
  	}
  }


  ngOnInit(): void {

  }
}
