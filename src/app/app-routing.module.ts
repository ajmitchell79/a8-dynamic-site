import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  UrlMatcher,
  UrlSegment,
  UrlMatchResult
} from "@angular/router";
import { ConceptTypeListComponent } from "./concept-type-list/concept-type-list.component";
import { NetworkGraphComponent } from "./network-graph/network-graph.component";
import { ArticlelistComponent } from "./articlelist/articlelist.component";
import { ArticleComponent } from "./article/article.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "locations"
  },
  {
    path: "network-graph",
    component: NetworkGraphComponent
  },
  {
    path: "article/:name",
    component: ArticleComponent
  },
  {
    path: "article-list/:name",
    component: ArticlelistComponent
  },
  {
    matcher: OntologyTypesMatcher,
    component: ConceptTypeListComponent
  }
];

export function OntologyTypesMatcher(url: UrlSegment[]): UrlMatchResult {
  if (url.length === 1 && url[0].path !== "network-graph") {
    return {
      consumed: url
    };
  }
  return null;
}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
