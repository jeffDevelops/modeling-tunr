import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';

@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.css']
})
export class ManagerEditComponent implements OnInit {

	updatedManager = <any>{};

  constructor(
    private managersService: ManagersService
  ) { }

  ngOnInit() {
  }

  updateManager(updatedManager) {
  	console.log('Updating manager...');
    this.managersService.updateManager(updatedManager)
    .subscribe(response => {
      console.log(response.json());
      let manager = response.json();
      window.location.href = `/managers/${manager.id}`;
    })
  }

}
