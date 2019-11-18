import { Component, OnInit } from "@angular/core";

export interface Article {
  Name: string;
  Description: string;
  Image: string;
}

@Component({
  selector: "app-articlelist",
  templateUrl: "./articlelist.component.html",
  styleUrls: ["./articlelist.component.scss"]
})
export class ArticlelistComponent implements OnInit {
  articles: Article[] = [];

  constructor() {}

  ngOnInit() {
    this.articles.push({
      Name: "Article 1",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });
    this.articles.push({
      Name: "Article 2",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });
    this.articles.push({
      Name: "Article 3",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });
    this.articles.push({
      Name: "Article 4",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });
    this.articles.push({
      Name: "Article 5",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });
    this.articles.push({
      Name: "Article 6",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });
    this.articles.push({
      Name: "Article 7",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });

    this.articles.push({
      Name: "Article 1",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });
    this.articles.push({
      Name: "Article 8",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });
    this.articles.push({
      Name: "Article 9",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });
    this.articles.push({
      Name: "Article 10",
      Description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      Image: "../../assets/article.jpg"
    });
  }

  getUrlFor(articleName: string) {
    return articleName.replace(" ", "-").toLowerCase();
  }
}
