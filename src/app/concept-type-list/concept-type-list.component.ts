import { Component, OnInit } from "@angular/core";
import { ConceptTypeListService } from "./concept-type-list.service";
import { ConceptItem } from "../shared/appFramework/appFramewordData";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-concept-type-list",
  templateUrl: "./concept-type-list.component.html",
  styleUrls: ["./concept-type-list.component.scss"]
})
export class ConceptTypeListComponent implements OnInit {
  conceptItems: ConceptItem[];
  constructor(
    private conceptTypeListService: ConceptTypeListService,
    private router: Router
  ) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      this.setConceptTypes();
    });
  }
  ngOnInit() {
    this.setConceptTypes();
  }

  setConceptTypes() {
    const conceptType = this.conceptTypeListService.getConceptItemsFor();
    if (conceptType === undefined || conceptType === null) {
      this.conceptItems = [];
      return;
    }
    this.conceptItems = conceptType.ConceptItems;
  }
}
