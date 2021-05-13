import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  repositoriesUrl = 'https://api.github.com/orgs/facebook/repos'

  constructor(private httpd: HttpClient) { }

  list(){
    return this.httpd.get<any[]>(`${this.repositoriesUrl}`)
  }
}
