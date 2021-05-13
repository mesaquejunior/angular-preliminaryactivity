import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../repositories.service';

@Component({
  selector: 'app-main-gh',
  templateUrl: './main-gh.component.html',
  styleUrls: ['./main-gh.component.scss']
})
export class MainGhComponent implements OnInit {

  repositories: Array<any>;

  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.repositoriesService.list().subscribe(res => this.repositories = res)
  }

}
