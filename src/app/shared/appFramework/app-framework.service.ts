import { Injectable } from "@angular/core";
import { AppFrameworkData } from "./appFramewordData";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppFrameworkService {
  appFrameWorkData: AppFrameworkData;

  private appFrameworkSubjects$ = new BehaviorSubject<AppFrameworkData>(
    this.appFrameWorkData
  );

  onAppframeworkChange(appFrameworkData: AppFrameworkData) {
    this.appFrameworkSubjects$.next(appFrameworkData);
  }

  getAppframework(): Observable<AppFrameworkData> {
    return of(this.appFrameWorkData);
  }

  appFrameworkChanged$ = this.appFrameworkSubjects$.asObservable();

  constructor() {}

  async load(): Promise<void> {
    this.appFrameWorkData = {
      Title: "PhastMark3ts",
      OntologyTypes: [
        {
          Label: "Location",
          Name: "Location",
          ConceptItems: [
            { Name: "London" },
            { Name: "Japan" },
            { Name: "Johannesburg" },
            { Name: "London" },
            { Name: "Japan" },
            { Name: "Johannesburg" },
            { Name: "London" },
            { Name: "Japan" },
            { Name: "Johannesburg" },
            { Name: "London" },
            { Name: "Japan" },
            { Name: "Johannesburg" },
            { Name: "London" },
            { Name: "Japan" },
            { Name: "Johannesburg" },
            { Name: "London" },
            { Name: "Japan" },
            { Name: "Johannesburg" }
          ]
        },
        {
          Label: "Commodoties",
          Name: "Commodoties",
          ConceptItems: [{ Name: "Iron" }, { Name: "Gold" }]
        }
      ]
    } as AppFrameworkData;

    this.onAppframeworkChange(this.appFrameWorkData);
  }
}
