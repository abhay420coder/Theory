import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  // method - 1

  httpHeaders = new HttpHeaders({
    'content-type' : 'application/json',
    'Authorization':'AbhayKumarAmu@2020'
  })



  // method - 2
  // httpHeaders = new HttpHeaders()

  constructor( private http : HttpClient) { }

  getContacts(url:string){ // retrieve contact list
    // method - 1
    let httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization':'AbhayKumarAmu@2020',
      'timeOutSeconds':'3000'
    })

    // headers are immutable

    // custom headers - use either set or append method
    httpHeaders = httpHeaders.set('arc-tutorial-id' , '118')

    let time = httpHeaders.get('timeOutSeconds')
    if(time == '4000'){
      // at the API we can check if Authorization is empty - redirect user to logIn Screen
      // SOme Custome Logic
      httpHeaders = httpHeaders.set('Authorization' , '')
    }

    return this.http.get(url , {headers:httpHeaders});
  }
  postContacts(url:string , body:object){  // add contact list
    return this.http.post(url,body);
  }
  putContacts(url:string , id:number , body:object){  // update contact list
    return this.http.put((url+'/'+id),body);
  }
  deleteContacts(url:string , id:number){  // delete contact list
    return this.http.delete((url+'/'+id));
  }

// get contact by id :- http params
getContactById(url:string){
  const httpParams = new HttpParams({
    fromObject:{
      // http://localhost:3000/posts?id=6
      // id : 6


      // http://localhost:3000/posts?id=6&id=4
      // id : [6,4]

      // http://localhost:3000/posts?id=6&title=json-server8
      id : 6,
      "title": "json-server8"
    }
  });

  return this.http.get(url , {params:httpParams});
}

}
