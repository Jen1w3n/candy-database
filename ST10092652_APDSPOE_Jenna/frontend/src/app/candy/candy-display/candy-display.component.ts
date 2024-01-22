import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CandyServiceService } from '../candy-service.service';

@Component({
  selector: 'app-candy-display',
  templateUrl: './candy-display.component.html',
  styleUrls: ['./candy-display.component.css']
})
export class CandyDisplayComponent {

  candies:{_id:string,id:string,name:string, __v:string}[] = [];

  constructor(public candyservice: CandyServiceService) { }
  //https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
  private candysubscription!: Subscription;

  ngOnInit() {
    this.candyservice.getcandy_service();
    this.candysubscription = this.candyservice.getUpdateListener()
   .subscribe((candies:{_id:string,id:string,name:string, __v:string}[])=>
    {
      this.candies = candies;
    });
  }

  ngOnDestroy()
  {
    this.candysubscription.unsubscribe();
  }

  ondelete(candyid:string) {
    this.candyservice.deletecandy_service(candyid);
  }
}
