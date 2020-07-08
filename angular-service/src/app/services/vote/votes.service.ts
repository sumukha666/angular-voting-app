import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VotesService {
  private _registerUrl ="http://127.0.0.1:3000/votes/"
  constructor(private http: HttpClient) {  }
  submitVote(data){
    return this.http.post<any>(this._registerUrl,data)
  }
  getVoteDetails(id){
    return this.http.get<any>(this._registerUrl+id)
  }
}
