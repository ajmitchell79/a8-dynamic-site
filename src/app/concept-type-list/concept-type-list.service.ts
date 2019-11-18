import { Injectable } from "@angular/core";
import { AppFrameworkService } from "../shared/appFramework/app-framework.service";
import { Router } from "@angular/router";
import { OntologyType } from "../shared/appFramework/appFramewordData";

@Injectable({
  providedIn: "root"
})
export class ConceptTypeListService {
  conceptName: string;
  ontologyType: OntologyType;
  constructor(
    private appDataService: AppFrameworkService,
    private router: Router
  ) {}

  getConceptItemsFor(): OntologyType {
    const conceptType = this.router.url.toLowerCase();

    this.appDataService.getAppframework().subscribe(a => {
      const foundOntologyType = a.OntologyTypes.filter(function(
        concept: OntologyType
      ) {
        return conceptType.indexOf(concept.Name.toLowerCase()) > -1;
      });
      this.ontologyType = foundOntologyType[0];
    });

    return this.ontologyType;
  }
}
