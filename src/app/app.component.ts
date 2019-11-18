import { Component, HostListener, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { AppFrameworkService } from "./shared/appFramework/app-framework.service";
import { OntologyType } from "./shared/appFramework/appFramewordData";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "coaltrans title";
  concepts: OntologyType[];
  // opened = true;
  // @ViewChild("sidenav", { static: true }) sidenav: MatSidenav;

  constructor(private appFrameworkService: AppFrameworkService) {
    this.appFrameworkService.getAppframework().subscribe(a => {
      this.title = a.Title;
      this.concepts = a.OntologyTypes;
    });
  }
  ngOnInit() {
    // console.log(window.innerWidth);
    // if (window.innerWidth < 768) {
    //   this.sidenav.fixedTopGap = 55;
    //   this.opened = false;
    // } else {
    //   this.sidenav.fixedTopGap = 55;
    //   this.opened = true;
    // }
  }

  // @HostListener("window:resize", ["$event"])
  // onResize(event) {
  //   if (event.target.innerWidth < 768) {
  //     this.sidenav.fixedTopGap = 55;
  //     this.opened = false;
  //   } else {
  //     this.sidenav.fixedTopGap = 55;
  //     this.opened = true;
  //   }
  // }

  // isBiggerScreen() {
  //   const width =
  //     window.innerWidth ||
  //     document.documentElement.clientWidth ||
  //     document.body.clientWidth;
  //   if (width < 768) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
