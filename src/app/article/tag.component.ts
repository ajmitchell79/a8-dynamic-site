import { Component, OnInit, Input } from '@angular/core';
import { ArticleTag } from "./article";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  tag: ArticleTag;
}
