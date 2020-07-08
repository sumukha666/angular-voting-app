import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  private _registerUrl ="http://127.0.0.1:3000/topics/"
  constructor(private http: HttpClient) {  }

  getTopics() {
    return this.http.get<any>(this._registerUrl);
  }
  createTopic(data){
    return this.http.post<any>(this._registerUrl,data);
  }

  deleteTopic(id){
    return this.http.delete<any>(this._registerUrl+id);
  }
}
