import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = "2c45ece5e021480eaa173d16fa9781be";

  constructor(private http : HttpClient) { }

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key)
  }

  getArticlesByid(source : string){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key)
  }

  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techrunch&apiKey=' + this.api_key)
  }
}
