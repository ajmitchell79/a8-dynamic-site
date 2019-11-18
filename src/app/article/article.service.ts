import { Injectable } from '@angular/core';
import { Article, ArticleTag } from './article'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
    private _url: string = "./assets/article.json";
    constructor(private http: HttpClient) { }

    getArticle(id: number): Observable<Article> {
      return this.http.get<Article>(this._url);
    }
}
