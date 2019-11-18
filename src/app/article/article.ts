export class ArticleTag {
    constructor(init?: Partial<ArticleTag>) { Object.assign(this, init); }
    public label: string;
    public link: string;
}

export class Article {
    constructor(init?: Partial<Article>) { Object.assign(this, init); }
    public title: string;
    public author: string;
    public description: string;
    public body: string;
    public tags: ArticleTag[];
    public imageUrl: string;
}
