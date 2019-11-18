import { Component, OnInit, Input } from '@angular/core';
import { Article, ArticleTag } from './article'
import { ArticleService } from "./article.service";

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    public article: Article;

    constructor(private articleService: ArticleService) {
      this.articleService.getArticle(1).subscribe(data => this.article = data);
    }

    ngOnInit() {
    }
}
