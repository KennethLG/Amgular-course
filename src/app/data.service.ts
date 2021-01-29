import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Todos } from "./Todos";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {

  }

  getData() {
  	return this.httpClient.get<Todos[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
