import { Injectable, OnInit } from "@angular/core";
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operator/map";

const ARTICLE_URI ="http://newsapi.org/v2/"
const API_KEY = "68cd49e37e4c43caa8bfc5632371c490"
@Injectable()
export class ArticleService{

  constructor(private http: HttpClient) { }

  public getTopHeadlines(country:string): Observable<any>{
    const  params = new HttpParams()
     .set("country", country)
     .set("apiKey", API_KEY)
     ;
     return this.http
     .get<any>(ARTICLE_URI+"/top-headlines",{
       params: params}).do(
        response=>
            response.articles
       );
       }
}