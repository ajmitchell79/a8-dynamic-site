import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GlobalModule } from "./global/global.module";
import { ConfigService } from "./shared/config/config.service";
import { ArticlelistComponent } from "./articlelist/articlelist.component";
import { ConceptTypeListComponent } from "./concept-type-list/concept-type-list.component";
import { NetworkGraphComponent } from "./network-graph/network-graph.component";
import { ChartsComponent } from "./shared/charts/charts.component";
import { TagComponent } from "./article/tag.component";
import { ArticleComponent } from "./article/article.component";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlelistComponent,
    ConceptTypeListComponent,
    NetworkGraphComponent,
    ChartsComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
      },
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export class Server {}
export function get_settings(configService: ConfigService) {
  return new Server();
}

export function configServiceFactory(
  configService: ConfigService
): () => Promise<boolean> {
  return () => {
    return configService.getAppFrameworkData();
  };
}
