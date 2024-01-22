import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandyServiceService {

  private candiesdisplay:{_id:string,id:string,name:string, __v:string}[] = [];
  private updatedcandiesdisplay = new Subject<{_id:string,id:string,name:string, __v:string}[]>();

  constructor(private http: HttpClient) { }

  addcandy_service(candyid:string, candyname:string)
  {
    this.http.post<{message:string,candy:any}>('http://localhost:3002/api/candies',{id:candyid,name:candyname})
   .subscribe ((thecandy)=>
    {
      this.candiesdisplay.push(thecandy.candy);
      this.updatedcandiesdisplay.next([...this.candiesdisplay]);
    })
  }

  getcandy_service() {
    this.http.get<{message:string,candies:any}>('http://localhost:3002/api/candies')
   .subscribe((thecandy)=>
    {
      this.candiesdisplay = thecandy.candies
      this.updatedcandiesdisplay.next([...this.candiesdisplay]);
    })
  }

  deletecandy_service(candyid:string)
  {
    this.http.delete('http://localhost:3002/api/candies/'+candyid)
    .subscribe(()=>
    {
      const updatedcandiesdeleted = this.candiesdisplay.filter(candy=>candy._id!==candyid);
      this.candiesdisplay = updatedcandiesdeleted;
      this.updatedcandiesdisplay.next([...this.candiesdisplay]);
    })
  }

  getUpdateListener()
  {
    return this.updatedcandiesdisplay.asObservable();
  }
}
