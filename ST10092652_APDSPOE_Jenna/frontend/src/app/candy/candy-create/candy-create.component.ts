import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CandyServiceService } from '../candy-service.service';

@Component({
  selector: 'app-candy-create',
  templateUrl: './candy-create.component.html',
  styleUrls: ['./candy-create.component.css']
})
export class CandyCreateComponent {

  constructor(public candyservice: CandyServiceService) { }

  onaddcandy(candyform: NgForm) {
    if (candyform.invalid) 
    {
      alert('Invalid name or ID.')
      return;
    }
    alert(candyform.value.enteredID+':'+candyform.value.enteredName);

    this.candyservice.addcandy_service(candyform.value.enteredID,candyform.value.enteredName)
    candyform.resetForm()
  }

}